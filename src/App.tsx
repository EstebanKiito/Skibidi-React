import { useEffect } from "react";

function App() {
  // 1. Primero se renderiza el componente
  // 2. Luego de manera asincrona se ejecuta el useEffect

  useEffect(() => {
    console.log("dentro de useEffect"); // Ultimo
  });
  console.log("fuera de useEffect"); // Primero

  return <div>Hello, World!</div>;
}

export default App;
