import os, json, random
from flask import Flask, make_response, request
from question import Question
from knowledge import Knowledge
from flask_cors import CORS

from sqlalchemy.sql import func

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

with open("questions.json", "r") as f:
    questions = json.loads(f.read())

with open("knowledges.json", "r") as f:
    knowledges = json.loads(f.read())

with open("user_info.json", "r") as f:
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
    resp = Flask.Response("Foo bar baz")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['X-Content-Type-Options'] = 'nosniff'
    return resp

@app.route('/api/getKnowledge')
def getKnowledge():
    time = int(request.args.get('time'))
    en = int(request.args.get('en'))
    cs = int(request.args.get('cs'))
    listen = int(request.args.get('listen'))
    note = int(request.args.get('note'))
    result = list()
    for i in knowledges:
        knowl = knowledges[i]
        if time < knowl["time"]:
            break
        if (not en) and (knowl["subject"] == "en"):
            break
        if (not cs) and (knowl["subject"] == "cs"):
            break
        if (not listen) and (knowl["audio"] != ""):
            break
        if (not note) and (knowl["difficulty"] > 5):
            break
        if (knowl["subject"] == "en") and (knowl["level"] < user_info["en_level"]):
            break
        if (knowl["subject"] == "cs") and (knowl["level"] < user_info["cs_level"]):
            break
        result.append(knowl)
    return json.dumps(random.choice(result))

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
    CORS(app)
