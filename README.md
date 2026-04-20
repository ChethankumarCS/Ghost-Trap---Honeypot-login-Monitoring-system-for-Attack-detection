

 GHOST-TRAP

 Honeypot-Based Login Monitoring System (Serverless)


---

 PROJECT OVERVIEW

Ghost-Trap is a cloud-based cybersecurity project that uses a fake login page (honeypot) to detect unauthorized access attempts.

 Instead of giving access, it captures attacker activity and sends real-time alerts.

>  Purpose: Early detection of suspicious login attempts using deception




---

LIVE DEMO

 Fake Login Page

https://github.com/ChethankumarCS/Ghost-Trap---Honeypot-login-Monitoring-system-for-Attack-detection
---

HOW IT WORKS

User / Attacker
        ↓
Fake Login Page (GitHub Pages)
        ↓
AWS Lambda (API Gateway)
        ↓
 Discord Alert (Webhook)

 

 PROCESS FLOW

User enters fake credentials

Clicks Login

Request sent to backend

Lambda captures:

 IP Address

 Username

Device / Browser


Alert sent instantly to Discord

Page shows "Authenticating..."



---

 TECH STACK

🔹 Layer	🔧 Technology

Frontend	HTML, CSS, JavaScript
Hosting	GitHub Pages
Backend	AWS Lambda
API	API Gateway
Alerts	Discord Webhooks



---

 KEY FEATURES

 Fake Admin Login (Honeypot)

 Serverless Architecture

 Instant Alert System

 Captures IP & Device Info

 Lightweight & Fast

 Free Tier Deployment



---

PROJECT STRUCTURE

ghost-trap/
│
├── index.html      # Fake login page
├── script.js       # API request logic (optional)
└── README.md


---

 SETUP & DEPLOYMENT

 STEP 1: Clone Repo

git clone https://github.com/yourusername/ghost-trap.git


---

 STEP 2: Deploy Frontend

Upload files to GitHub

Enable GitHub Pages



---

 STEP 3: Setup Backend

Create AWS Lambda

Paste alert code

Add Discord webhook



---

🔹 STEP 4: Connect API

Create API Gateway

Paste API URL into frontend



---

🔹 STEP 5: Test

Open website

Click login

Check Discord 


---


RESUME DESCRIPTION

> Developed and deployed a serverless honeypot login system to detect unauthorized access attempts using AWS Lambda and real-time Discord alerts.


---

 KEY TAKEAWAY

>  “Detect early → Respond fast → Stay secure”

---
