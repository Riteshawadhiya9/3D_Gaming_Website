import { useEffect, useRef, useState } from "react";
import About from "./Components/About";
import Hero from "./Components/Hero";
import NavBar from "./Components/Navbar";
import Features from "./Components/Features";
import Story from "./Components/Story";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const songs = [
    "/audio/public_audio_loop.mp3",
    "/audio/If-We-Have-Each-Other.mp3",
    "/audio/Just_A_Boy.mp3",
  ];

  const songNames = [
    "Public Audio Loop",
    "If We Have Each Other",
    "Just A Boy",
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play().catch(() => {
          console.log("Audio autoplay prevented by browser");
        });
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const changeSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src={songs[currentSongIndex]}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Music Controls */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col items-center gap-3">
        {/* Instruction Text - Fixed height to prevent button movement */}
        <div className="h-6 flex items-center justify-center">
          <p className="text-cyan-300 text-sm font-semibold text-center whitespace-nowrap animate-pulse drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            {isPlaying ? "Double tap to change the song" : "Wanna play music while scrolling??"}
          </p>
        </div>

        {/* Play Button */}
        <button
          onClick={toggleMusic}
          onDoubleClick={changeSong}
          className="bg-cyan-400/20 hover:bg-cyan-400/40 text-cyan-400 rounded-full p-3 transition-all duration-300 border border-cyan-400/50 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] active:shadow-[0_0_30px_rgba(34,211,238,0.8)]"
          title={`${isPlaying ? "Pause" : "Play"} • ${songNames[currentSongIndex]}`}
        >
          <span className="text-2xl drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            {isPlaying ? "⏸" : "▶"}
          </span>
        </button>
      </div>

      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;