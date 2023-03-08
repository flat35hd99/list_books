from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/book", methods=["POST"])
def book():
    id = request.get_json()["id"]
    print("id:", id)
    return id

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080, threaded=True)
    