import React, { useEffect, useState } from "react";
import "./Clouds.css"


const Clouds = () => {

    const [clouds, setClouds,] = useState([]);
    
    useEffect(() => {
      const totalClouds = 5;
      const generatedClouds = [];

      for (let i = 0; i < totalClouds; i++) {
        const delay = Math.random() * 20; // Tiempo aleatorio entre 0-20s
        const top = Math.random() * 300;  // Posición vertical aleatoria (dentro de sky-container)
        const scale = Math.random() * 0.5 + 0.75;  // Tamaño entre 0.75x y 1.25x
        const duration = Math.random() * 30 + 30;  // Duración entre 30s y 60s
        const reverse = Math.random() > 0.5; // Algunas de derecha a izquierda
        
        generatedClouds.push({ id: i, delay, top , scale, duration, reverse });
      }

      setClouds(generatedClouds);
    
    }, []);

return (
    <div className="sky-container">
    {clouds.map((cloud) => (
      <div
        key={cloud.id}
        className={`cloud ${cloud.reverse ? "reverse" : ""}`}
        style={{
          top: `${cloud.top}px`,
          animationDelay: `${cloud.delay}s`,
          animationDuration: `${cloud.duration}s`,
          transform: `scale(${cloud.scale})`,
        }}
      />
    ))}
    </div>
 );
};

export default Clouds;