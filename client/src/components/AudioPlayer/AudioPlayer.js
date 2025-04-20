import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic, faPause } from "@fortawesome/free-solid-svg-icons";

import "./AudioPlayer.css"

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlayback = () => {
    const audio = audioRef.current;

    if(!audio) return;

    if (audio.paused) {
        audio.play();
        setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }
 
  return (
    <div className="text-center mt-4 audio-player-container">
      
      {/* Audio oculto */}
     <audio ref={audioRef} preload="auto">
        <source src="/fantasy.mp3" type="audio/mpeg"/>
   </audio>

    {/* Botón mágico */}
    <button className="magic-button" onClick={togglePlayback}>
    <FontAwesomeIcon icon={isPlaying ? faPause : faMagic}/>
    {isPlaying ? "Pausar" : "Música mágica"}

    </button>
 </div>
 );
};

export default AudioPlayer;