from fastapi import FastAPI
from models import ResumeRequest
from resume_analyzer import analyze_resume

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI Interview Coach API is running"}

@app.post("/analyze-resume")
def review_resume(request: ResumeRequest):
    return analyze_resume(request.resume_text)