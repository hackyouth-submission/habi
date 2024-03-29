import os, json, random
from flask import Flask, make_response, request
from question import Question
from knowledge import Knowledge
from flask_cors import CORS

from sqlalchemy.sql import func

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

with open("questions.json", "r", encoding="utf-8") as f:
    questions = json.loads(f.read())

with open("knowledges.json", "r", encoding="utf-8") as f:
    knowledges = json.loads(f.read())
    print(knowledges)

with open("user_info.json", "r", encoding="utf-8") as f:
    user_info = json.loads(f.read())

@app.route('/')
def index():
    return "Hello, World!"

def to_response(data):
    return make_response(json.dumps(data.__dict__), 200)

# @app.route('/test')
# def test():
#     return to_response(Knowledge(content="test"))

# @app.route('/get')
# def get():
#     content = request.args.get('content')
#     return content + content

@app.route('/api/getQuestion')
def getQuestion():
    time = int(request.args.get('time'))
    en = int(request.args.get('en'))
    cs = int(request.args.get('cs'))
    listen = int(request.args.get('listen'))
    note = int(request.args.get('note'))
    result = list()
    for i in questions:
        quest = questions[i]
        if time < quest["time"]:
            break
        if (not en) and (quest["subject"] == "en"):
            break
        if (not cs) and (quest["subject"] == "cs"):
            break
        if (not listen) and (quest["audio"] != ""):
            break
        if (not note) and (quest["difficulty"] > 5):
            break
        if (quest["subject"] == "en") and (quest["level"] > user_info["en_level"]):
            break
        if (quest["subject"] == "cs") and (quest["level"] > user_info["cs_level"]):
            break
        result.append(quest)
    return json.dumps(random.choice(result))

@app.route('/api/getKnowledge')
def getKnowledge():
    print(knowledges)
    return make_response(json.dumps(knowledges[0]), 200)

@app.route("/addPoint", methods=["POST"], strict_slashes=False)
def addPoint():
    title = request.json['title']
    body = request.json['body']
    user_info["total_answer"] += 1
    if (body["point"] == 1):
        user_info["true_answer"] += 1
    with open("user_info.json", "w") as f:
        f.write(json.dumps(user_info.json))

if __name__ ==  "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)