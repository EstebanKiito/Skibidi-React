// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // BUTTON HANDLING: Parte en falso el estado de isLoading
  const [isLoading, setIsLoading] = useState(false); // Hook de estado: Retorna un array con el estado y la funcion para actualizarlo
  const handleClick = () => setIsLoading(!isLoading); // Cambia el estado de loading al contrario del actual

  // Con ctrl+esp podemos ver las sugerencias de codigo
  const list = ["Goku", "Vegeta", "Gohan"];

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };

  // RENDERIZADO CONDICIONAL:
  // 2 formas: (? - :) o (&&) -> && toma 0 como true!
  //const contenido = list.length !== 0 && (
  //  <List data={list} onSelect={handleSelect} /> );

  //  CONDICIONALES PEQUEÑOS: dentro del codigo

  return (
    <Card>
      <CardBody title="Hola Mundo" text="texto del componente" />
      {/* {contenido} */}
      {list.length !== 0 && <List data={list} onSelect={handleSelect} />}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
}

export default App;
