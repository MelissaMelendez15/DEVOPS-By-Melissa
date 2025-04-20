import React, { useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import MessageDisplay from "./components/MessageDisplay/MessageDisplay";
import FormMessage from "./components/FormMessage/FormMessage";
import Footer from "./components/Footer/Footer";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import HeroImage from "./components/HeroImage/HeroImage";
import Clouds from "./components/Cloud/Clouds";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BUTTON_LABELS, BUTTON_ICONS } from "./utils/constants";


import './App.css';

function App() {

  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [alerta, setAlerta] = useState({ tipo: "", mensaje: "" });

  const handleShowMessage = async () => {
    try {
     
      const response = await axios.get("http://localhost:5000/api/mensajes");
      const data = response.data;

      const randomIndex = Math.floor(Math.random() * data.length);
      const randomMessage = data[randomIndex];
     
      setMessage(randomMessage.texto);
      console.log("Mensaje recibido:", randomMessage.texto)
     
     } catch(error) {
       console.error("Error fetching messages:", error)
       setMessage("Ups... Richie se perdió entre las nubes.");
     }
    }
  
  const handleToggleForm = async () => {
   setShowForm(!showForm);
  }
  
  const handleCreateMessage = async () => {
   
  if(!newMessage.trim()) {
    setAlerta({ tipo: "warning", mensaje: "Escribe un mensaje mágico primero" });
    return;
   }

   try {
    const response = await axios.post("http://localhost:5000/api/mensajes", {
      texto: newMessage,
    });

    console.log('mensaje enviado', response.data);
    
    setNewMessage('');
    setShowForm(false);
    setAlerta({ tipo: "success", mensaje: "Mensaje enviado con éxito!" });
  
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    alert("Ups... algo salió mal");
   }
  }

  const addSparkleEffect = (e) => {
    const btn = e.currentTarget;
    btn.classList.add("sparkle");

    setTimeout(() => {
     btn.classList.remove("sparkle");
    }, 600); // Debe coincidir con la duración de la animación
  };
  
  return (
    <div className="container-fluid text-center p-4">
      <Clouds />
      
      <HeroImage />
      
      <Header />
      
      {alerta.mensaje && (
        <div className={`alert alert-${alerta.tipo} alert-dismissible fade show mt-3`} role="alert">
          
          {alerta.mensaje}
          
          <button 
          type="button"
          className="btn-close"
          onClick={() => setAlerta({ tipo: "", mensaje: "" })}
          ></button>
        </div>
      )}
      
      <MessageDisplay message={message} />
    
        <div className="magic-btn-container">
          <button className="magic-btn m-2" onClick={(e) => {
            addSparkleEffect(e);
            handleShowMessage();
          }}>
          
          <FontAwesomeIcon icon={BUTTON_ICONS.inspire} /> {BUTTON_LABELS.inspire}
          
          </button>
          
          <button className="magic-btn m-2" onClick={(e) => {
           addSparkleEffect(e);
           handleToggleForm();
          }}>
          
          <FontAwesomeIcon  icon={BUTTON_ICONS.create} /> {BUTTON_LABELS.create}
          
          </button>
        </div>
    
        {showForm && (
          <FormMessage 
             newMessage={newMessage}
             setNewMessage={setNewMessage}
             handleCreateMessage={handleCreateMessage}
          />
      )}
      
      <AudioPlayer />
     
      <div className="main-content">
       <Footer />
     </div>
    </div>
  );
}

export default App;
