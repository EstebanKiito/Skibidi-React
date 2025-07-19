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

    // Cancelar hook: esto es util por ejemplo si el usuario de desconecta, ahorramos recursos al desuscribirnos de la petición.
    const controller = new AbortController(); // Controlador para cancelar la petición si el componente se desmonta
    const { signal } = controller; // Señal para pasar al fetch (para cancelarlo)

    async function hook() {
      const url = "https://jsonplaceholder.typicode.com/users";
      setCargando(true);

      try {
        //fetch(url)
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data: User[] = await response.json();
        setUsers(data);
        setError(undefined); // Limpiamos el error si la petición es exitosa
      } catch (error) {
        // error: Error nos da error ya que catch espera un any o unknown: Truco es envolver el error as Error
        setError((error as Error).message);
      } finally {
        setCargando(false);
      }
    }

    hook(); // Llamamos a la función interna para ejecutar el código asíncrono
    return () => controller.abort(); // Limpiamos el efecto cancelando la petición si el componente se desmonta
    // Por causa de Strict Mode, se ejecuta dos veces el efecto, por lo que se cancela la petición en el segundo renderizado
    // Para evitar esto: seteamos error a undefined: setError(undefined);
  }, []);

  return { users, cargando, error };
}
