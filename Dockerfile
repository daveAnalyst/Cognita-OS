# Use a specific, stable Python version as the parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /src-backend

# Install system dependencies needed by Ollama and other tools
RUN apt-get update && apt-get install -y curl

# Install Ollama into Container
RUN curl -fsSL https://ollama.com/install.sh | sh

#Install dependencies
RUN pip install --no-cache-dir --trusted-host pypi.python.org -r requirements.txt

# Download the necessary models into the container's Ollama
RUN ollama serve & sleep 5 && \
    ollama pull gemma3 && \
    pkill ollama

#Expose the port for out FastAPI
EXPOSE 8000

CMD ["sh", "-c", "ollama serve & uvicorn src-backend.main:app --host 0.0.0.0 --port 8000"]

#Copy the rest of the application's code from your host to the image filesystem
COPY . .


CMD python bootstrap.py && uvicorn main:app --reload --host 0.0.0.0 --port 8000
