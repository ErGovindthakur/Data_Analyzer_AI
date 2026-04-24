from fastapi import FastAPI # type: ignore
import pandas as pd # type: ignore
from model import predict

app = FastAPI()

app = FastAPI()

# Adding for testing purpose
@app.get("/")
def read_root():
    return {"message": "API is running 🚀"}

@app.post("/analyze")
def analyze(data: dict):
    file_path = data["filePath"]

    df = pd.read_csv(file_path)

    summary = {
        "rows": len(df),
        "columns": list(df.columns),
        "mean": df.mean(numeric_only=True).to_dict()
    }

    prediction = predict(df)

    return {
        "summary": summary,
        "prediction": prediction
    }