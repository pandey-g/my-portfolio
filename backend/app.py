from flask import Flask, jsonify, request
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from bson.objectid import ObjectId
from bson.errors import InvalidId
from flask_pymongo import PyMongo
load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend


# Email configuration for depolyment
"""SMTP_SERVER = "smtp.sendgrid.net"  # Change this based on your email provider
SMTP_PORT = 587  # Port for TLS
EMAIL_SENDER = "lawbindpandey01dev@gmail.com"  # Your email address
EMAIL_PASSWORD = os.getenv("SENDGRID_API_KEY")  # Use an app password for security """

# Email configuration for testing on local
SMTP_SERVER = "smtp.gmail.com"  # Change this based on your email provider
SMTP_PORT = 587  # Port for TLS
EMAIL_SENDER = "lawbindpandey01dev@gmail.com"  # Your email address
EMAIL_PASSWORD = os.getenv("GMAIL_APP_PASSWORD")  # Use an app password for security


@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        # Extract data from request
        data = request.json
        full_name = data.get('fullName')
        sender_email = data.get('email')
        message = data.get('message')

        # Validate fields
        if not full_name or not sender_email or not message:
            return jsonify({"message": "All fields are required"}), 400

        # Email setup
        msg = MIMEMultipart()
        msg["From"] = EMAIL_SENDER
        msg["To"] = EMAIL_SENDER  # Send to yourself
        msg["Subject"] = f"New Contact Form Message from {full_name}"

        # Email content
        email_body = f"Name: {full_name}\nEmail: {sender_email}\nMessage:\n{message}"
        msg.attach(MIMEText(email_body, "plain"))

        # Send email via SMTP
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()  # Secure connection
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            server.sendmail(EMAIL_SENDER, EMAIL_SENDER, msg.as_string())

        return jsonify({"message": "Email sent successfully"}), 200

    except Exception as e:
        return jsonify({"message": f"Error sending email: {str(e)}"}), 500


# Get MongoDB URI from environment variables
app.config["MONGO_URI"] = os.getenv("MONGODB_URI")
mongo = PyMongo(app)
db = mongo.db.Blogs 
# Connect to MongoDB Atlas
#client = MongoClient(mongo_uri)
#mongo = PyMongo(app)
#db = client['portfolio_db']
#blogs_collection = db['blogs']

# Get all blogs
@app.route("/api/blogs", methods=["GET"])
def get_blogs():
    try:
        blogs = []
        for blog in db.find():
            blogs.append({
                "id": str(blog["_id"]),
                "title": blog["title"],
                "content": blog["content"],
                "date": blog.get("Date", "Unknown")
            })
        return jsonify(blogs)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Get blog by ID
@app.route("/api/blogs/<id>", methods=["GET"])
def get_blog(id):
    try:
        blog = db.find_one({"_id": ObjectId(id)})
        if blog:
            return jsonify({
                "id": str(blog["_id"]),
                "title": blog["title"],
                "content": blog["content"],
                "date": blog.get("Date", "Unknown")
            })
        return jsonify({"error": "Blog not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)