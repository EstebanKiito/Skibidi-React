import { useState } from "react";
import ProductDashboard from "./components/ProductDashboard.tsx";
import ProductList from "./components/ProductList.tsx";
import Button from "./components/Button.tsx";

/** ---- PASOS ----
 * 1. Envia la instruccion a React
 * 2. Al terminar handleCount: Renderiza el componente
 * 3. Actualiza el estado
 */

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone",
    },
  ]);
  const handleClick = () => {
    // ---- Separando Componentes (Y sus Estados)----

    // Donde vive el estado es donde debemos definir las acciones que lo modifican

    const newProduct = [...products, { id: 2, name: "Android" }];
    setProducts(newProduct);
  };

  return (
    <div>
      <ProductDashboard amount={products.length} />
      <Button onClick={handleClick}>Enviar</Button>
      <ProductList products={products} />
    </div>
  );
}

export default App;
