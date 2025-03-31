# Pokémon Search App

![Pokemon App](https://imgs.search.brave.com/plHMS74KT1U_k4vfWwhUaI0l6Gk_8jNcjFEUh0bE4io/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcG9rZW1vbl9s/b2dvL3NtYWxsL3Bv/a2Vtb25fbG9nb19Q/TkcxMi5wbmc)

*A blazing-fast Pokémon search app built with Next.js, Tailwind, and React Query.*

## 🚀 Live Demo

🔗 **[Open Pokémon App](https://pokemon.vecna.online)**

---

## 📦 Getting Started

### 📜 Set up the enviroment variables
.env.example is provided, copy the variables from there to .env.development, .env.production or .env

### 🐳 Run with Docker
For a quick setup, you can run the project using Docker:

#### **For ARM-based devices (Mac M1, M2, M3)**:
```sh
docker run -d -p 3000:3000 --name=pokemon vikasdev4046/pokemon:1.0.1
```

#### **For x86-based devices (Windows, Intel Mac, Linux)**:
```sh
docker run -d -p 3000:3000 --name=pokemon vikasdev4046/pokemon:1.0.2
```

### 🏗️ Build & Push Docker Image (After Changes)
If you make any modifications, build and push the image to your repository:

#### **For ARM-based devices (Mac M1, M2, M3)**:
```sh
docker build --platform linux/arm64 -t your-repo:version .
```

#### **For x86-based devices (Windows, Linux)**:
```sh
docker build --platform linux/amd64 -t your-repo:version .
```

---

## 💻 Development Mode
To start the project in development mode:
```sh
npm run dev
```

For a **production-ready** experience:
```sh
npm run build
npm run start
```

---

## 🛠️ Tech Stack
- **Next.js** – Server-side rendering & performance optimizations
- **Tailwind CSS** – Modern, responsive styling
- **React Query** – Smart data caching & fetching
- **Trie Data Structure** – Fast and robust search implementation
- **Docker** – Easy deployment & containerization

---

## ⚡ Features
✅ **SSR Optimized** – Lightning-fast page loads with Next.js  
✅ **Smart Caching** – Optimized with React Query for better UX  
✅ **Trie-based Search** – Efficient and scalable search implementation  
✅ **Beautiful UI** – Clean and intuitive design with Tailwind CSS  

---

## 📜 License
MIT License © 2025 Vikas Dev

---

💡 *Contributions, issues, and feature requests are welcome!* 🎉