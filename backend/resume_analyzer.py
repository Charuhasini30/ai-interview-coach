from transformers import pipeline

generator = pipeline(
    "text-generation",
    model="distilgpt2"
)

def analyze_resume(resume_text):
    prompt = f"""
Analyze the following resume and provide strengths, weaknesses, and ATS suggestions:

{resume_text}

Feedback:
"""

    result = generator(
        prompt,
        max_new_tokens=150,
        do_sample=True
    )

    return {
        "feedback": result[0]["generated_text"]
    }