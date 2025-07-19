// Tiene que llamarse useState useUser useContext... parte con use

import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export default function useUser() {
  // Promesas + Consumo API
  const [users, setUsers] = useState<User[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

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

  return { users, cargando, error };
}
