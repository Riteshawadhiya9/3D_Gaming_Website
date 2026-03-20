# 🌐 3D Website - Interactive React Project

A modern, interactive 3D website built with React and Vite, featuring stunning visual effects, smooth animations, and integrated background music functionality.

## ✨ Features

### 🎵 Music Player
- **3 Background Songs** with seamless switching
- **Play/Pause Control** - Single tap to play or pause
- **Song Switching** - Double tap the button to change to the next song
- **Smart UI Text**:
  - Shows "Tap to play song" when music is stopped
  - Shows "Double tap to change the song" when music is playing
- **Glowing Button** with cyan aesthetic and hover effects
- **Fixed Position** controls for easy accessibility

### Available Songs
1. Public Audio Loop
2. If We Have Each Other
3. Just A Boy

### 🎨 Design & Animations
- **Responsive Layout** - Works on all screen sizes
- **Tailwind CSS** - Modern styling and utility-first approach
- **Smooth Animations** - Enhanced visual experience with glowing effects
- **Component-Based Architecture** - Modular and maintainable code

## 📁 Project Structure

```
src/
├── App.jsx                 # Main app with music player logic
├── main.jsx               # Entry point
├── index.css              # Global styles
└── Components/
    ├── About.jsx          # About section
    ├── AnimatedTitle.jsx  # Animated title component
    ├── Button.jsx         # Reusable button component
    ├── Contact.jsx        # Contact section
    ├── Features.jsx       # Features showcase
    ├── Footer.jsx         # Footer section
    ├── Hero.jsx           # Hero section
    ├── Navbar.jsx         # Navigation bar
    ├── Story.jsx          # Story section
    └── VideoPreview.jsx   # Video preview component

public/
├── audio/                 # Background music files
│   ├── public_audio_loop.mp3
│   ├── If-We-Have-Each-Other.mp3
│   └── Just_A_Boy.mp3
├── fonts/                 # Custom fonts
├── img/                   # Images
└── videos/                # Video files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd 3D_Website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will run on `http://localhost:5173` (or another available port).

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎮 How to Use

1. **Play Music**
   - Click the play button (▶) in the bottom-left corner to start the background music
   - Click again to pause (⏸)

2. **Change Songs**
   - While music is playing, double-click the button to switch to the next song
   - Songs cycle through in order: Song 1 → Song 2 → Song 3 → Song 1...

3. **Browse Content**
   - Navigate through different sections using the navbar
   - Enjoy smooth animations and interactive components

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code quality

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks

## 🎵 Music Player Implementation

The music player is built into the main `App.jsx` component with:
- State management for play/pause and song selection
- Dynamic text that changes based on playing state
- Enhanced hover effects and glowing animations
- Smooth transitions between songs
- Audio element with loop functionality

## 💡 Tips

- The music player's glowing effects work best on dark backgrounds
- Audio autoplay may be restricted by some browsers - click the play button to start
- Double-click responsiveness works best on desktop, but tap functionality supports mobile devices

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the project, make your changes, and submit a pull request.

---

**Enjoy your 3D Website experience! 🌟**
