import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI

# Load GEMINI API key
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

# Initialize model
chat_model = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0.7,
    max_output_tokens=80,
    api_key=api_key
)

# AI function
def ask_ai(message: str) -> str:
    try:
        response = chat_model.invoke([
            {
                "role": "system",
                "content": (
                    "You are Coding Instructor AI. "
                    "Always give short, concise answers (max 3–5 lines). "
                    "Do NOT give long explanations, headings, or big paragraphs. "
                    "Keep answers simple and direct. "
                    "If user asks non-coding question, reply exactly: "
                    "'you are dumn buddy, I can only answer coding questions.'"
                )
            },
            {"role": "user", "content": message}
        ])

        reply = response.text if hasattr(response, "text") else str(response)
        return reply.strip()

    except Exception as e:
        return f'Error: {str(e)}'

