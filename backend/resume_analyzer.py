from gemini_client import get_resume_feedback

def analyze_resume(resume_text):
    feedback = get_resume_feedback(resume_text)
    return {"feedback": feedback}
