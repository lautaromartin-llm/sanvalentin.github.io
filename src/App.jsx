import { useState } from "react";
import "./App.css";

// Configuración de puntos - Agrega o modifica aquí tus puntos fácilmente
const points = [
  {
    id: 1,
    text: "Siempre te recuerdo cuando pienso en la Luna o cuando la miro.",
    image: "/images/punto1.jpg",
  },
  {
    id: 2,
    text: "¿Te imaginás tener una cita viendo a esta preciosa? Me refiero a vos con 'preciosa'.",
    image: "/images/punto2.jpg",
  },
  {
    id: 3,
    text: "Por suerte estamos lejos, así tus ojos no me opacan cuando quiero verla por el telescopio.",
    image: "/images/punto3.jpg",
  },
  {
    id: 4,
    text: "Así cómo Júpiter, la Luna nos ha acompañado y salvado muchas veces de meteoritos, de igual forma que siempre me acompañás y estás para mí.",
    image: "/images/punto4.jpg",
  },
  {
    id: 5,
    text: "¿Qué es mas grande? ¿El Sol, la Luna o lo mucho que te amo?.",
    image: "/images/punto6.jpg",
  },
  {
    id: 6,
    text: "¿Sabías que lo que es para nosotros un'Eclipse de Luna', para la Luna es un 'Eclipse de Sol'?.",
    image: "/images/punto7.jpg",
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Feliz San Valentín</h1>
      </header>

      <div className="points-container">
        {points.map((point, index) => (
          <div
            key={point.id}
            className={`point-item ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="image-container">
              <img
                src={point.image}
                alt={`Punto ${point.id}`}
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23211f21" width="400" height="400"/%3E%3Ctext fill="%23e61ece" font-size="20" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImagen %23' +
                    point.id +
                    "%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="text-container">
              <p>{point.text}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>¡Cierto! Feliz San Valentín, preciosa.</p>
      </footer>
    </div>
  );
}

export default App;
