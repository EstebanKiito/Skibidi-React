// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  // Con ctrl+esp podemos ver las sugerencias de codigo
  const list = ["Goku", "Vegeta", "Gohan"];

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };
  return (
    <Card>
      <CardBody title="Hola Mundo" text="texto del componente" />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
