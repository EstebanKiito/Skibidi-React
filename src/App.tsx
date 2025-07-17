import { useEffect } from "react";

function App() {
  // 1. Primero se renderiza el componente
  // 2. Luego de manera asincrona se ejecuta el useEffect

  // 3. Limpieza: con una funcion anonima
  useEffect(() => {
    console.log("cargando usuarios..."); // Ultimo

    return () => {
      console.log("limpieza: Cancelar carga");
    };
  });

  return <div>Hello, World!</div>;
}

export default App;
