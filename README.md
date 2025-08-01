# Multi-theme-switcher-app
A modern React + TypeScript application that allows users to switch between three distinct visual themes. Each theme not only changes the color palette but also adjusts the layout, fonts, and spacing to give a unique user experience. The theme persists across pages and reloads using localStorage.

# Available Themes

 Theme 1: Minimalist Light (Default)
Light background with subtle contrast

Simple sans-serif font

Clean, single-column layout

 Theme 2: Dark Sidebar
Dark background and serif typography

Sidebar-style layout for product grid

Improved readability in dark environments

 Theme 3: Colorful Playful
Vibrant gradient background (yellow → pink → purple)

Card-based grid layout

Google Font: Pacifico for a fun, lively feel

# Features
 Three distinct themes

 Theme persists across routes and reloads

 Functional components with Context API

🧩 Tailwind CSS for rapid styling

🔄 React Router DOM for page navigation

📦 API Integration (Fake Store API)

 Responsive Design for all devices

 Mobile sidebar adapts to theme

# ⚙️ Tech Stack
React (with Hooks)

TypeScript

Tailwind CSS

React Router DOM

Context API (for theme management)

LocalStorage (for persistence)

Google Fonts (Pacifico)

# How to Run 

# 1. Clone the repository
[multi-theme-switcher-app](https://github.com/Farjana1khan/FarjanaFatehmohd_ReactFrontendDeveloper.git)

# 2. Navigate to the project
cd multi-theme-switcher-app

# 3. Install dependencies
npm install

# 4. Start the development 
npm start

📁 Folder Structure

src/

├── components/

│   └── Header.tsx

│   └── ProductCard.tsx

|   └── ProductSection.tsx

├── context/

│   └── ThemeContext.tsx

├── pages/

│   └── Home.tsx

│   └── About.tsx

│   └── Contact.tsx

├── App.tsx

└── index.tsx


