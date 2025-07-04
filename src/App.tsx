// import Card from "./components/Card";
import Card, { CardBody } from "./components/Card";

function App() {
  // Con ctrl+esp podemos ver las sugerencias de codigo
  return (
    <Card>
      <CardBody title="Hola Mundo" text="texto del componente" />
    </Card>
  );
}

export default App;
