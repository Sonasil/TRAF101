# 🚗 TRNC Driving Safety

A comprehensive web application for mastering traffic signs and rules for the Turkish Republic of Northern Cyprus (TRNC/KKTC) driving license exams.

## ✨ Features

- **📚 Complete Sign Database**: 144+ traffic signs organized by category
- **📝 Practice Tests**: License-specific quizzes (A, A1, B, C, D, EH)
- **🎯 Instant Feedback**: Review incorrect answers with explanations
- **📊 Progress Tracking**: Monitor your learning journey
- **🌐 Bilingual**: English interface with Turkish translations
- **📱 Responsive Design**: Works on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite
- **State Management**: Pinia
- **Routing**: Vue Router
- **Styling**: Modern CSS with custom design system

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd TRAF101

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
TRAF101/
├── public/
│   ├── signs/           # Traffic sign images
│   └── signs.json       # Sign database
├── src/
│   ├── components/      # Reusable Vue components
│   ├── data/           # Static data (licenses, questions, study data)
│   ├── router/         # Vue Router configuration
│   ├── stores/         # Pinia state management
│   ├── views/          # Page components
│   ├── App.vue         # Root component
│   ├── main.js         # Application entry point
│   └── style.css       # Global styles and design system
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

The application uses a modern, professional design system featuring:
- Ocean Blue color palette
- Inter font family
- Consistent spacing and typography scales
- Smooth transitions and micro-animations
- Responsive grid systems

## 📝 License Types Supported

- **A1**: Motorcycles (50-125cc)
- **A**: All motorcycles
- **B**: Standard passenger cars
- **C**: Heavy goods vehicles
- **D**: Buses and coaches
- **EH**: Hazardous materials transport

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

Traffic sign data and regulations based on TRNC traffic laws and standards.
