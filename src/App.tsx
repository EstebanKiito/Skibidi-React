import { useState } from "react";

/** ---- PASOS ----
 * 1. Envia la instruccion a React
 * 2. Al terminar handleCount: Renderiza el componente
 * 3. Actualiza el estado
 */

function App() {
  const [prodcut, setProduct] = useState({ name: "Iphone", stock: 10 });
  const handleClick = () => {
    // --- ACTUALIZANDO OBJETOS ---

    //prodcut.name = "Samsung"; // Mutacion: Modifica el objeto original
    const newProduct = { ...prodcut, name: "Samsung" }; // Copia el objeto y modifica el nombre

    setProduct(newProduct); // Metodo Inmutable: Crea una nueva referencia
  };

  return (
    <div>
      <button onClick={handleClick}>Agregar</button>
      <p>
        {prodcut.name} , {prodcut.stock}
      </p>
    </div>
  );
}

export default App;
