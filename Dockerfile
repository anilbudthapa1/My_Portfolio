# -----------------------------
# Ubuntu Lab – Dockerfile
# -----------------------------

# Base Ubuntu image
FROM ubuntu:22.04

# Avoid interactive prompts during package install
ENV DEBIAN_FRONTEND=noninteractive

# Update and install some basic tools
RUN apt-get update && \
    apt-get install -y \
        curl \
        wget \
        nano \
        net-tools \
        iputils-ping \
        python3 \
        python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user for safety
RUN useradd -ms /bin/bash ubuntuuser
USER ubuntuuser

# Working directory for our tiny web app
WORKDIR /home/ubuntuuser/web

# Simple HTML page to confirm the container is running
RUN echo '\
<!DOCTYPE html>\n\
<html lang="en">\n\
<head>\n\
  <meta charset="UTF-8" />\n\
  <title>Ubuntu Docker Lab</title>\n\
  <meta name="viewport" content="width=device-width, initial-scale=1" />\n\
  <style>\n\
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background:#020617; color:#e5e7eb; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; }\n\
    .card { background:#0f172a; padding:2rem 2.5rem; border-radius:18px; box-shadow:0 18px 50px rgba(15,23,42,0.9); border:1px solid rgba(148,163,184,0.4); max-width:480px; text-align:center; }\n\
    h1 { font-size:1.6rem; margin-bottom:0.5rem; }\n\
    p { margin:0.4rem 0; font-size:0.95rem; color:#cbd5f5; }\n\
    code { padding:0.1rem 0.3rem; border-radius:6px; background:#020617; border:1px solid rgba(148,163,184,0.4); }\n\
  </style>\n\
</head>\n\
<body>\n\
  <div class="card">\n\
    <h1>Ubuntu Docker Lab</h1>\n\
    <p>Your container is running successfully.</p>\n\
    <p>Served from <code>python3 -m http.server 8080</code> inside an Ubuntu 22.04 image.</p>\n\
  </div>\n\
</body>\n\
</html>\n\
' > index.html

# Expose HTTP port used by the Python server
EXPOSE 8080

# Run a simple HTTP server on port 8080
CMD ["python3", "-m", "http.server", "8080"]
