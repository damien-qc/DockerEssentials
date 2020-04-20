from flask import Flask
app = Flask(__name__)

@app.route('/')
def response():
    return "Look at me: I'm a Python Dev now!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)

