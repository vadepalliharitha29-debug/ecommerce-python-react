# Miss Elegance - Full-Stack Ecommerce 💖

A beautifully designed, full-stack ecommerce web application built from the ground up for women's fashion. "Miss Elegance" bridges the gap between premium design aesthetics and robust backend architecture.

##  Tech Stack

**Frontend:**
- **React.js** (+ Vite for ultra-fast build times)
- **Tailwind CSS** (for responsive, modern UI layouts)
- **Axios** (for secure API handling)
- **React Router** (for seamless client-side navigation)

**Backend:**
- **Django & Python**
- **Django REST Framework** (RESTful APIs for all logic)
- **JWT Authentication** (JSON Web Tokens via SimpleJWT)
- **MySQL / SQLite** (Relational database management)

## ✨ Features

- **Storefront & Catalog**: Browse fully categorized, dynamic catalogs of elegant apparel with detailed views.
- **Cart & Checkout Logic**: Complete front-to-back integration allowing users to queue items and generate authenticated purchase orders.
- **Secure Authentication**: End-to-end token-based login/signup flows ensuring user-specific data tracking.
- **Admin Dashboard**: Easy store management capability through the classic Django backend admin console.

## 🛠️ How to Run Locally

### 1. Backend Setup

Open a terminal and navigate into the `Backend` foldler:

```bash
cd Backend
# Install python dependencies (Assuming Django + DRF are installed)
# Run database migrations
python manage.py makemigrations
python manage.py migrate
# Start Django Server
python manage.py runserver
```
The API will run at `http://127.0.0.1:8000/`.

### 2. Frontend Setup

Open a separate terminal and navigate into the `front-end` foldler:

```bash
cd front-end
# Install Node dependencies
npm install
# Start React development server
npm run dev
```
The React frontend will be accessible at typically `http://localhost:5173/`.

### 3. Check it out
Create an account on the live frontend, log in, browse the categories, and submit a checkout order. You can view all orders through the Django admin dashboard by logging in at `http://127.0.0.1:8000/admin`.

---
*Created as a portfolio piece by a Full-Stack Python Developer highlighting capability bridging React and Django Rest Framework.*
