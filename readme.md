# 🏨 Hotel Habor – Premium Booking Form

![Hotel Booking Form Preview](https://akash-imperial-hotel.netlify.app/)

> A modern, accessible, and production-ready hotel booking form built with vanilla HTML5, CSS3, and JavaScript. Designed with a vibrant teal & gold palette, glassmorphism effects, and robust client-side validation. Perfect for internship portfolios and real-world applications.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://akash-imperial-hotel.netlify.app/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📋 Project Overview

**Hotel Habor** is a fully responsive, client-side hotel booking form that demonstrates modern frontend development practices. Built from scratch with vanilla technologies, it features a luxurious teal & gold design system, real-time form validation, dynamic date constraints, and smooth micro-interactions.

This project showcases:
- **Clean, maintainable code** with separation of concerns (HTML/CSS/JS)
- **Mobile-first responsive design** using CSS Grid and Flexbox
- **Accessibility-first approach** with ARIA labels, keyboard navigation, and high contrast
- **Professional UI/UX patterns** – glassmorphism cards, tooltips, loading states, success feedback
- **No dependencies** – pure vanilla JavaScript

---

## ✨ Features

### 🎨 Design & UX
- **Vibrant teal & gold color palette** – premium, warm, and inviting
- **Glassmorphism card design** with backdrop blur and golden borders
- **Smooth hover animations** and transition effects
- **Fully responsive** – optimized for mobile, tablet, and desktop
- **Custom tooltips** explaining room types with keyboard accessibility
- **Loading animation** on form submission
- **Success message** with auto-hide and form reset

### ✅ Validation & Logic
| Field | Validation Rule | Feedback |
|-------|----------------|----------|
| Check-in | Required, no past dates | Red border + error message |
| Check-out | Required, must be after check-in | Dynamic min date, error if invalid |
| Room type | Required | Error if not selected |
| Guests | Default values (2 adults, 0 children) | No validation required |
| Special requests | Optional | Free text |

- **Real-time validation** – errors appear on blur/change
- **Dynamic date constraints** – checkout minimum updates based on check-in
- **Past date prevention** – date picker disables all past dates
- **Form reset** – clears all fields after successful submission

### ♿ Accessibility
- Semantic HTML (`<main>`, `<form>`, `<label>`, etc.)
- ARIA labels and `aria-live` regions for dynamic content
- Focus outlines with golden ring (WCAG compliant)
- Keyboard navigable tooltips
- High contrast ratios (7:1 minimum)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure, form elements, date inputs |
| **CSS3** | Grid/Flexbox layouts, custom properties, animations, glassmorphism |
| **Vanilla JavaScript (ES6+)** | DOM manipulation, validation logic, event handling |
| **Google Fonts** | Playfair Display (headings), Inter (body) |
| **Font Awesome 6** | Icons for visual enhancement |
| **Netlify** | Deployment and hosting |

---

## 📦 Installation Instructions

### Local Setup (2 minutes)

1. **Clone the repository**
   ```bash
   git clone https://github.com/csbikash97/Hotel-Akash-Imperial.git
   cd hotel-booking-form