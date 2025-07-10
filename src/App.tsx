import { useState } from "react";

/** ---- PASOS ----
 * 1. Envia la instruccion a React
 * 2. Al terminar handleCount: Renderiza el componente
 * 3. Actualiza el estado
 */

function App() {
  let numero = 0; // Esto siempre se reinicializa a 0 cada vez que se renderiza el componente
  // Mejor usar useState (por si queremos tener ese valor en cada componente)

  // --- Combinar Estados ---
  const [user, setUser] = useState({
    name: "Esteban",
    lastName: "Pro",
    age: 20,
  });

  const [shape, setShape] = useState({
    width: 100,
    height: 100,
    x: 25,
    y: 150,
  });

  console.log("Renderizando..."); // 2 veces en caso de que se use StrictMode en main.tsx
  const [count, setCount] = useState(0);
  const handleCount = () => {
    numero++;
    setCount(count + 1);
    console.log("Count: ", count, numero); // No se actualizara aun / numero siempre sera 1
  }; // Luego de terminar la funcion, se seteara el valor

  return <button onClick={handleCount}>Enviar</button>;
}

export default App;
