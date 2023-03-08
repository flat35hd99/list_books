from flask import *
from flask_cors import CORS
from handler import handle_id

app = Flask(__name__)
CORS(app)

# Serve static files
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/bundle.js")
def js():
    with open("dist/bundle.js") as f:
        return Response(f.read(), mimetype="text/javascript")

@app.route("/book", methods=["POST"])
def book():
    id = request.get_json()["id"]
    handle_id(id)
    return id

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080, threaded=True)
