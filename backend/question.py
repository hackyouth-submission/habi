class Question():

    def __init__(self, statement="", image="", audio="", answer="", difficulty=0, time=0, subject=""):
        self.statement = statement
        self.image = image
        self.audio = audio
        self.answer = answer
        self.difficulty = difficulty
        self.time = time
        self.subject = subject

    subject = "" # mon hoc
    difficulty = 0 # do kho
    level = 0 # cap bai hoc
    time = 0 # thoi gian

    statement = "" # cau hoi
    image = "" # hinh anh
    audio = "" # am thanh

    answer = "" # dap an
    