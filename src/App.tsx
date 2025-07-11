import { useState } from "react";

/** ---- PASOS ----
 * 1. Envia la instruccion a React
 * 2. Al terminar handleCount: Renderiza el componente
 * 3. Actualiza el estado
 */

function App() {
  const [prodcut, setProduct] = useState({
    name: "Iphone",
    stock: 10,
    adress: {
      city: "Madrid",
      country: "Spain",
    },
  });
  const handleClick = () => {
    // --- Propiedades Anidadas ---

    const newProduct = {
      ...prodcut,
      adress: { ...prodcut.adress, city: "Barcelona" },
    };

    setProduct(newProduct); // Metodo Inmutable: Crea una nueva referencia
  };

  return (
    <div>
      <button onClick={handleClick}>Agregar</button>
      <p>
        {prodcut.name} , {prodcut.stock}, {prodcut.adress.city}
      </p>
    </div>
  );
}

export default App;
