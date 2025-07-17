import { useEffect, useState } from "react";

function App() {
  // 1. Primero se renderiza el componente
  // 2. Luego de manera asincrona se ejecuta el useEffect

  // 3. Limpieza: con una funcion anonima

  // 4. Dependencias: Debo añadir [] para que se ejecute una sola vez, si no, se queda en un loop de renderizacion infinito
  const [users, setUsers] = useState<string[]>();

  useEffect(() => {
    console.log("Llamando al servidor...");
    const data = ["Esteban", "Daniel"];
    setUsers(data);
    //}); -> Sin el argumento de dependencias, se ejecuta en cada renderizado
  }, []);

  return <div>Hello, World!</div>;
}

export default App;
