function Titulo() {
  const nombre = "Esteban";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola Mundo</h1>; // Esto no es codigo HTML, es JSX: Se transforma con React.createElement
}

export default Titulo;
