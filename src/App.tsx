// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  // Con ctrl+esp podemos ver las sugerencias de codigo
  const list = ["Goku", "Vegeta", "Gohan"];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="texto del componente" />
      <List data={list} />
    </Card>
  );
}

export default App;
