import { useState } from "react";
import ProductList from "./components/ProductList.tsx";
import Button from "./components/Button.tsx";

function App() {
  const [products, setProducts] = useState([
    {
      id: Math.random().toString(), // Asi Usamos key unicos
      name: "iPhone",
    },
  ]);

  const comienzo = () => {
    const newProduct = {
      id: Math.random().toString(),
      name: "Inicio",
    };
    setProducts([newProduct, ...products]);
  };

  const final = () => {
    const newProduct = {
      id: Math.random().toString(),
      name: "Final",
    };
    setProducts([...products, newProduct]);
  };

  const eliminar = () => {
    const newProducts = products.slice(0, -1);
    setProducts(newProducts);
  };

  const limpiar = () => {
    setProducts([]);
  };

  return (
    <div>
      <Button onClick={comienzo}>Comienzo</Button>
      <Button onClick={final}>Final</Button>
      <Button onClick={eliminar}>Eliminar Ultimo</Button>
      <Button onClick={limpiar}>Limpiar</Button>
      <ProductList products={products} />
    </div>
  );
}

export default App;
