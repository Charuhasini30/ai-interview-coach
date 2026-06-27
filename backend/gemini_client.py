import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash")

def get_resume_feedback(resume_text: str):
    prompt = f"""
You are an expert resume reviewer for FAANG companies.

Analyze the resume below and provide:
1. Strengths
2. Weaknesses
3. Suggestions for improvement
4. ATS optimization tips

Resume:
{resume_text}
"""

    response = model.generate_content(prompt)
    return response.text
