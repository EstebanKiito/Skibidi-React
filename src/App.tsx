import useUsers from "./hooks/useUsers";

function App() {
  const { users, cargando, error } = useUsers();

  if (error && !cargando) {
    return <p>Error: {error}</p>;
  }

  // Para un buscador lento, antes de mostrar los datos, se puede mostrar un mensaje de "CARGANDO..."
  if (cargando) {
    return <p>Cargando......</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
