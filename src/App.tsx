import useHtmlData from "./hooks/useHtmlData";

type User = {
  id?: string | number;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const {
    data: users,
    cargando,
    error,
    addData: addUser,
    deleteData: deleteUser,
  } = useHtmlData<User>(url);

  if (error && !cargando) {
    return <p>Error: {error}</p>;
  }

  // Para un buscador lento, antes de mostrar los datos, se puede mostrar un mensaje de "CARGANDO..."
  if (cargando) {
    return <p>Cargando......</p>;
  }

  return (
    <ul>
      <button onClick={() => addUser({ name: "Esteban Ortega" })}>
        Añadir
      </button>
      <button onClick={() => deleteUser(1)}>Eliminar</button>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
