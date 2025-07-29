# BFHL REST API

A simple REST API built using **Node.js** and **Express** for the BFHL assessment. The API receives an array via a `POST` request and returns structured data separating numbers, alphabets, special characters, and more.

---

## 🔧 Technologies Used

- Node.js
- Express.js
- JavaScript

---

## 📦 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ritain-sood/BFHL-Rest-Api.git
   cd BFHL-Rest-Api

2. Install Dependencies

   npm install


3. Start The Server

  node server.js

4. Server will start on: http://localhost:3000/bfhl



🚀 API Endpoint

POST /bfhl
Request Body (JSON):
{
  "data": ["1", "2", "a", "b", "%"]
}

Response:


{
  "is_success": true,
  "user_id": "john_doe_123456",
  "email": "john.doe@example.com",
  "roll_number": "123456",
  "odd_number": ["1"],
  "even_number": ["2"],
  "alphabets": ["A", "B"],
  "special_characters": ["%"],
  "sum": "3",
  "concat_string": "%"
}


🧪 How to Test Using Postman

1. Open Postman

2. Create a new POST request

3. Enter the URL:

  http://localhost:3000/bfhl

4. Go to the Body tab → select raw → choose JSON format

5. Paste this sample data:

{
  "data": ["1", "2", "a", "b", "%"]
}

6. Click Send.

7. You should see a response with structured JSON output.


📬 Dummy Credentials Used

user_id: john_doe_123456

email: john.doe@example.com

roll_number: 123456


