from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import ResumeRequest
from resume_analyzer import analyze_resume

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later we will restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI Interview Coach API is running"}

@app.post("/analyze-resume")
def review_resume(request: ResumeRequest):
    return analyze_resume(request.resume_text)
