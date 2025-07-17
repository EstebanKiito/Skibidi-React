import { useEffect, useState } from "react";

function App() {
  // 1. Primero se renderiza el componente
  // 2. Luego de manera asincrona se ejecuta el useEffect

  // 3. Limpieza: con una funcion anonima

  // 4. Dependencias: Debo añadir [] para que se ejecute una sola vez, si no, se queda en un loop de renderizacion infinito
  const [token, setToken] = useState<string>();

  useEffect(() => {
    console.log("Buscando algo con el Token:", token);
  }, [token]); // Aqui le doy que variable quiero que escuche, y vuelva a ejecutar el useEffect cuando cambie!

  console.log(token);

  return (
    <div>
      <button onClick={() => setToken("mi_token")}>Obtener Token</button>
    </div>
  );
}

export default App;
