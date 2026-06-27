# Backend Setup

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run the Server

```bash
uvicorn main:app --reload
```

## API Endpoints

### GET /

Health check endpoint.

### POST /analyze-resume

Accepts:

```json
{
  "resume_text": "Your resume text"
}
```
