import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};
function App() {
  // Promesas + Consumo API
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    // fetch + then (sin async await)
    fetch(url)
      .then((response) => {
        return response.json() as Promise<User[]>;
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
