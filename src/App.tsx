import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};
function App() {
  // Promesas + Consumo API
  const [users, setUsers] = useState<User[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/xusers";

    setCargando(true);

    // fetch + then (sin async await)
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`);
        return response.json() as Promise<User[]>;
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

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
