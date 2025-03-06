from flask import Flask, request, jsonify
from fuzzywuzzy import process
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to communicate with Flask backend

# Load FAQ data
with open("labour_faq.json", "r", encoding="utf-8") as file:
    faq_data = json.load(file)

# Extract questions for fuzzy matching
questions = [item["question"] for item in faq_data]

def get_best_response(user_query):
    best_match, score = process.extractOne(user_query, questions)
    if score > 60:
        for item in faq_data:
            if item["question"] == best_match:
                return item["answer"]
    return "Sorry, I couldn't find an answer to your question."

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    response = get_best_response(user_input)
    return jsonify({"reply": response})

if __name__ == "__main__":
    app.run(debug=True, port=5001)  # Running on port 5001
