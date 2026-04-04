# 🚀 End-to-End DevOps Project (CI/CD + Kubernetes + Monitoring)

This is my first complete DevOps project where I implemented a full pipeline from development to deployment and monitoring.

I built a simple Node.js web app with an API service, containerized it using Docker, deployed it on Kubernetes, automated the process using Jenkins, and finally added monitoring using Prometheus and Grafana.

---

## 🔧 Tech Stack

* Node.js (Web App + API Service)
* Docker
* Kubernetes (k3s)
* Jenkins (CI/CD)
* Prometheus
* Node Exporter
* Grafana

---

## 📌 What I Did

* Created a Node.js web app and a separate API service
* Dockerized both services using Dockerfiles
* Pushed images to Docker Hub
* Deployed everything on Kubernetes using Deployments, Services, and Ingress
* Set up Jenkins on a Linux VM and created a CI/CD pipeline
* Automated build and deployment process
* Added monitoring using Prometheus and Grafana
* Visualized CPU, memory, and system metrics

---

## ⚙️ How the Flow Works

1. Code is pushed to GitHub
2. Jenkins pipeline gets triggered
3. Docker images are built and pushed to Docker Hub
4. Kubernetes pulls the latest images and deploys them
5. App is exposed using Ingress (localhost)
6. Prometheus collects metrics using Node Exporter
7. Grafana displays the metrics in dashboards

---

## 📊 Screenshots

### App Running

![App](screenshots/app.png)

### Grafana Dashboard

![Grafana](screenshots/grafana.jpeg)

### Prometheus Targets

![Prometheus](screenshots/promthues.jpeg)

### Jenkins Pipeline

![Pipeline](screenshots/pipeline.jpeg)

---

## 🚀 How to Run

Clone the repository:

```bash
git clone https://github.com/Badrekamil/end-to-end-devops-pipeline.git
```

Then:

* Build Docker images
* Apply Kubernetes YAML files from `k8s/` folder
* Access the app via localhost

---

## 📚 What I Learned

This project helped me understand:

* How CI/CD works in real projects
* How Docker and Kubernetes integrate
* How to expose services using Ingress
* Basics of monitoring with Prometheus and Grafana

---

## 👨‍💻 Author

Badre Kamil 
