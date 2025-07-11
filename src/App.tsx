import { useState } from "react";

/** ---- PASOS ----
 * 1. Envia la instruccion a React
 * 2. Al terminar handleCount: Renderiza el componente
 * 3. Actualiza el estado
 */

function App() {
  const [prodcuts, setProducts] = useState([{ name: "Iphone" }]);
  const handleClick = () => {
    //prodcuts.push({ name: "Samsung" }); // Metodo Mutable: Toma la variable de products y la modifica directamente
    // El hook detecta cuando le pasamos una referencia nueva
    // No si modificamos el objeto directamente
    //1. let newProducts = prodcuts.concat({ name: "Xiaomi" }); // Metodo Inmutable: Crea una nueva referencia
    //2. let newProducts = [...prodcuts, { name: "Xiaomi" }]; // Metodo Inmutable: Crea una nueva referencia
    setProducts((prevState) => [...prevState, { name: "Xiaomi" }]); // Metodo Inmutable: Crea una nueva referencia
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar</button>;
      <ul>
        {prodcuts.map((prodcuts) => (
          <li key={prodcuts.name}>{prodcuts.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
