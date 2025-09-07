# 🖼️ BG Remover

**BG Remover** is a lightweight, fast, and accurate AI-powered web app that removes image backgrounds in one click. Designed for simplicity and speed, it allows users to upload an image and receive a clean cut-out with transparency — perfect for content creators, designers, and developers.

![Demo Screenshot]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ae825841-31bf-44ed-a880-10c2006620e3" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fe3ebd47-065a-4a09-8f1e-3b2c9a89bb85" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8e302bdf-9384-4a6f-a2fa-47cc6486e595" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/918814e9-61e9-4ba4-b76f-3138704f0fd3" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/91f5f0f2-e728-4959-8dc7-be5e5ad73aba" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a7f362a7-7322-4503-9713-6ba992faaf76" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dd2d5cf1-f589-46e1-8ab6-d57f1a4a7432" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6a0da70f-b0db-428e-955b-115899444350" />

---

## 🚀 Live Demo

🔗 [Try it Now](https://bg-remover-xi-brown.vercel.app)

---

## ✨ Features

- ✅ One-click background removal
- ⚡ Fast and lightweight
- 📷 Supports PNG, JPG, and WebP formats
- 🧠 AI-based segmentation for accuracy
- 🎯 Credit system integration
- 🎨 Clean and modern UI

---

## 🛠️ Tech Stack

| Layer        | Tech                                 |
|--------------|--------------------------------------|
| Frontend     | React                                |
| Backend      | Node.js + Express                    |
| Styling      | Tailwind CSS                         |
| Hosting      | Vercel (Frontend), Render for (backend) |
| Image AI     | ClipDrop API (used for background removal / image editing) |


---

## 📁 Project Structure

bg-remover/
├── client/ # Frontend (React )
│ ├── public/
│ └── src/
| ├── components/
| ├── assets/
| ├── auth/
| ├── context/
│ ├── pages/
│ └── App.jsx
│
├── server/ # Backend (Node.js/Express)
│ ├── routes/
│ ├── controllers/
│ └── index.js
| |__ models.js
│ |__ middleware.js
├── .gitignore
└── README.md



---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/joshu1024/bg-remover.git
cd bg-remover

2. Install Frontend
cd client
npm install
npm run dev


Runs frontend on http://localhost:5173

3. Install Backend
cd ../server
npm install
npm start


Runs backend on http://localhost:4000

4. Environment Variables

Create .env files in both client and server directories:

/client/.env
VITE_API_URL=http://localhost:4000

/server/.env
API_KEY=your_api_key_here

🧪 How It Works

User uploads an image via the frontend.

The frontend sends the image to the backend.

The backend sends the image to an AI model (like remove.bg or a custom segmentation API).

The background is removed, and a transparent PNG is returned to the user.

🧾 Credits System (Optional)

Users receive a limited number of credits (e.g., 200).

Each image processed deducts 1 credit.

System tracks credit usage per user session (can be implemented via JWT, localStorage, etc.).

📦 Deployment
Vercel (Frontend)

Auto-deploys from client/ folder.

Add VITE_API_URL as an environment variable in Vercel dashboard.

Backend (Optional Platforms)

Railway

Render

🙋‍♂️ Contributing

Fork the repository

Create a new branch: git checkout -b feature/your-feature-name

Commit your changes: git commit -m "Add new feature"

Push to the branch: git push origin feature/your-feature-name

Submit a pull request

📄 License

This project is licensed under the MIT License. 

👤 Author

joshu1024


🧠 Inspiration

Inspired by tools like remove.bg and powered by modern AI to make background removal accessible, fast, and free.
