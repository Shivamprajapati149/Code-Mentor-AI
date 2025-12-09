Code Mentor AI

An AI-powered coding mentor to assist with programming queries, provide code explanations, and help you learn efficiently.

🚀 Features

Ask programming questions in natural language

Get AI-generated code snippets and explanations

Multi-language support (Python, JavaScript, etc.)

Context-aware responses using conversation memory

Interactive and user-friendly frontend

🛠️ Technologies Used

Frontend: React, Tailwind CSS, Shadcn UI

Backend: Python, Flask / FastAPI

AI: LangChain, Gemini API / OpenAI API

Others: Axios for API requests, dotenv for environment variables

📁 Project Structure
Code-Mentor-AI/
│
├─ frontend/       # React frontend
│  ├─ src/
│  │  ├─ components/
│  │  ├─ App.jsx
│  │  └─ app.css
│  └─ package.json
│
├─ backend/        # Python backend
│  ├─ app.py       # Main Flask / FastAPI app
│  ├─ routes/
│  ├─ services/
│  ├─ models/
│  └─ requirements.txt
│
├─ .env            # Environment variables
└─ README.md

⚡ Installation
Clone the repository
git clone https://github.com/yourusername/code-mentor-ai.git
cd code-mentor-ai

Backend setup
cd backend
# Create virtual environment (optional but recommended)
python -m venv venv
# Activate venv
# Windows: venv\Scripts\activate
# Linux/Mac: source venv/bin/activate

pip install -r requirements.txt

# Create a .env file with your API keys
python app.py


The backend will run on http://localhost:5000 (Flask) or http://localhost:8000 (FastAPI).

Frontend setup
cd frontend
npm install
npm start


The frontend will run on http://localhost:3000
 and communicate with the Python backend.

🖥️ Usage

Open the app in your browser.

Ask your coding questions in the chat interface.

The AI will respond with explanations and code suggestions.

Use the features interactively to learn faster and debug code.

📦 Environment Variables

Create a .env file in the backend folder with:

OPENAI_API_KEY=your_openai_or_gemini_api_key

💡 Future Improvements

Add user authentication and saved sessions

Improve conversation memory for more context-aware answers

Add multi-language support

Enhance AI explanations with interactive examples

📌 Credits

Built with ❤️ by [Shivam Prajapati]

AI powered by LangChain & Gemini / OpenAI
