import { useState } from "react";

/** ---- PASOS ----
 * 1. Envia la instruccion a React
 * 2. Al terminar handleCount: Renderiza el componente
 * 3. Actualiza el estado
 */

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "iPhone",
    },
    {
      id: 2,
      name: "Samsung",
    },
  ]);
  const handleClick = () => {
    // --- ARRAYS ---

    // 1. Agrega al final
    //const newProduct = [...product, { id: 2, name: "Android" }];

    // 2. Agrega al inicio
    //const newProduct = [{ id: 2, name: "Android" }, ...product];

    // 3. --- Modificar Array ---
    const newProduct = product.map((p) =>
      p.id === 1 ? { ...p, name: "Windows" } : p
    );

    // 4. --- Eliminar de Array ---
    const newProducts = product.filter((p) => p.id !== 1);
    setProduct(newProduct);
  };

  return (
    <div>
      <button onClick={handleClick}>Agregar</button>
      <ul>
        {product.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
