import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};
function App() {
  // Promesas + Consumo API
  const [users, setUsers] = useState<User[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    setCargando(true);

    // fetch + then (sin async await)
    fetch(url)
      .then((response) => {
        return response.json() as Promise<User[]>;
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

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
