# 🛍️ Miss Elegance - Full-Stack Ecommerce Platform

**Live Demo:** [https://miss-elegance.netlify.app](https://miss-elegance.netlify.app)

Miss Elegance is a modern, fully responsive, full-stack ecommerce web application designed for fashion retail. It features a completely decoupled architecture with a React.js frontend and a Python/Django REST API backend.

---

## 🚀 Tech Stack

### Frontend (Client)
* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** React Hooks & LocalStorage
* **Hosting:** Netlify

### Backend (API)
* **Framework:** Django & Django REST Framework (DRF)
* **Database:** PostgreSQL,MySQL
* **Authentication:** JWT (JSON Web Tokens) via SimpleJWT
* **Hosting:** Render

---

## ✨ Key Features
* **Secure Authentication:** User registration and login using stateless JWT authentication.
* **Product Catalog:** Dynamic product grids with categorized filtering.
* **Shopping Cart:** Persistent local cart management for guest and logged-in users.
* **Checkout Flow:** Seamless order placement with simulated payment gateways.
* **Order History:** Dedicated user dashboard to track past orders.
* **Admin Dashboard:** Built-in Django admin panel for managing inventory, categories, and users.
* **Responsive Design:** Mobile-first Tailwind implementation for flawless viewing on all devices.

---

## 🛠️ Local Installation & Setup

If you wish to run this project locally on your machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/vadepalliharitha29-debug/ecommerce-python-react.git
cd ecommerce-python-react
```

### 2. Backend Setup (Django)
Open a terminal and navigate to the `Backend` directory:
```bash
cd Backend
# Create a virtual environment
python -m venv venv
# Activate the virtual environment (Windows)
venv\Scripts\activate
# Install dependencies
pip install -r requirements.txt
# Run database migrations
python manage.py migrate
# Start the backend server
python manage.py runserver
```
*The backend API will run on `http://127.0.0.1:8000`*

### 3. Frontend Setup (React)
Open a second terminal and navigate to the `front-end` directory:
```bash
cd front-end
# Install Node modules
npm install
# Start the development server
npm run dev
```
*The frontend will run on `http://localhost:5173`*

---

## 🧑‍💻 Author
**Haritha Vadepalli**
* Feel free to connect with me on LinkedIn or reach out for collaboration!

---
*This project was built to demonstrate proficiency in building, integrating, and deploying decoupled full-stack architectures.*
