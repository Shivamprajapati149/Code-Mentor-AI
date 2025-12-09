from model import ask_ai
from flask import Flask, request,jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # allow frontend to access api

@app.route("/chat",methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message", "")
    if not message:
        return jsonify({"error": "Message is required"}), 400
    
    reply=ask_ai(message)
    return jsonify({"response":reply})

if __name__ == "__main__":
    app.run(debug=True, port=5000)








