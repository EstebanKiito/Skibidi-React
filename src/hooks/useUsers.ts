// Tiene que llamarse useState useUser useContext... parte con use

import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export default function useUsers() {
  // Promesas + Consumo API
  const [users, setUsers] = useState<User[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    // fetch Con async await
    // 1. No podemos retornar promesas desde UseEffect, dado que retirna solo para Cancelar (limpiar efectos) y async retrorna una promesa.
    // 2. No podemos usar async await directamente en el callback de useEffect, por
    //    lo que debemos crear una función interna para usar async await

    async function hook() {
      const url = "https://jsonplaceholder.typicode.com/users";
      setCargando(true);
      try {
        //fetch(url)
        const response = await fetch(url);
        if (!response.ok) throw new Error(`${response.status}`);
        //return response.json() as Promise<User[]>;
        const data: User[] = await response.json();
        //.then((data) => {
        //  setUsers(data);
        setUsers(data);
      } catch (error) {
        // error: Error nos da error ya que catch espera un any o unknown: Truco es envolver el error as Error
        setError((error as Error).message);
      } finally {
        setCargando(false);
      }
    }

    hook(); // Llamamos a la función interna para ejecutar el código asíncrono
  }, []);

  return { users, cargando, error };
}
