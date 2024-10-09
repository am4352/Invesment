from flask import Flask, jsonify, request
from flask_cors import CORS
from groq import Groq

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Use your frontend port here (3000 or 5173)

GROQ_API_KEY = "1070944db1bd4941a62a2f17eeae3c0d"
client = Groq(api_key=GROQ_API_KEY)

# Groq API function to generate response
def get_llm_response(prompt):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        model="llama3-8b-8192"
    )
    return chat_completion.choices[0].message.content

# Endpoint for stock recommendations
@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    theme = request.json.get('theme')
    if not theme:
        return jsonify({"error": "Theme is required"}), 400

    recommendation_prompt = f"Recommend top stocks for the {theme} sector in the Indian market."
    
    try:
        recommendation = get_llm_response(recommendation_prompt)
        return jsonify({"recommendation": recommendation})
    except Exception as e:
        return jsonify({"error": "Error processing the recommendation request", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
