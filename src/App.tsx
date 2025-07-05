// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // BUTTON HANDLING: Parte en falso el estado de isLoading
  //const [isLoading, setIsLoading] = useState(false); // Hook de estado: Retorna un array con el estado y la funcion para actualizarlo
  //const handleClick = () => setIsLoading(!isLoading); // Cambia el estado de loading al contrario del actual

  const [data, setData] = useState(["Goku", "Vegeta", "Gohan"]); // Estado para la lista de datos

  const addMiniom = () => {
    console.log("Añadiendo Miniom");
    setData([...data, "Miniom"]); // Agrega un nuevo elemento a la lista
  };

  const removeMiniom = () => {
    console.log("Eliminando Miniom");
    setData([...data.slice(0, -1)]); // Elimina el último elemento de la lista
  };

  // Con ctrl+esp podemos ver las sugerencias de codigo
  //const list = ["Goku", "Vegeta", "Gohan"];

  //const handleSelect = (elemento: string) => {
  //  console.log("Elemento seleccionado:", elemento);
  //};

  //  CONDICIONALES PEQUEÑOS: dentro del codigo

  // {list.length !== 0 && <List data={list} onSelect={handleSelect} />}
  return (
    <Card>
      <CardBody />
      <Button onClick={addMiniom}>Agregar</Button>
      <Button onClick={removeMiniom}>Eliminar</Button>
      <List data={data} />
    </Card>
  );
}

export default App;
