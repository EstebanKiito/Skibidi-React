// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
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
    </Card>
  );
}

export default App;
