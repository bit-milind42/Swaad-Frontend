# SWAAD 🍽️

**SWAAD** is a full-stack **online food delivery web application** built to bridge the gap between hungry customers and vibrant restaurants.  
This platform supports two types of users — **Customers** and **Restaurant Owners**, each with tailored interfaces and functionality.

---

## 🚀 Features

### 👤 User Roles

- **Customer**  
  - Browse restaurants (only **open** ones are selectable)  
  - Add menu items to cart  
  - Enter delivery address  
  - Make online payments (Razorpay integration)  
  - Track and view past orders  

- **Restaurant Owner**  
  - Register and manage their own restaurant  
  - Add **menu items**, **categories**, and **ingredients**  
  - View and manage all received orders  
  - Update **order status** (`Pending`, `Out for Delivery`, `Delivered`, etc.)  
  - Add events and view restaurant details  

---

## 🧑‍💻 Authentication

Users must sign up or log in with their role:
- **Customer** account
- **Restaurant Owner** account

Authentication is JWT-based.

---

## 🖼️ Demo Screenshots

### 📱 Customer Panel
![Customer Panel Screenshot](https://raw.githubusercontent.com/bit-milind42/Swaad-Frontend/blob/main/Customer.png)

### 🧑‍🍳 Restaurant Owner Panel
![Restaurant Panel Screenshot](https://raw.githubusercontent.com/bit-milind42/Swaad-Frontend/blob/main/Restaurant.png)

---

## 🛠️ Tech Stack

### Frontend:
- **React.js**
- **Redux** for state management
- **Formik & Yup** for form handling & validation
- **Axios** for API communication
- **Material-UI** for design components
- **Tailwind CSS** for responsive layouts

### Backend:
- **Java (Spring Boot)**
- **JPA/Hibernate**
- **MySQL** 
- **JWT Authentication**
- **Razorpay API** for payments

---


