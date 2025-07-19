// Tiene que llamarse useState useUser useContext... parte con use

import { useEffect, useState } from "react";

export default function useFetchData<T>(url: string) {
  // MEJORANDO ESTE HOOK : Users -> Data!
  // Le pasamos el tipo de dato que queremos recibir <T> que es genérico
  // T es User desde App.tsx

  const [data, setData] = useState<T[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController(); // Controlador para cancelar la petición si el componente se desmonta
    const { signal } = controller; // Señal para pasar al fetch (para cancelarlo)

    async function hook() {
      setCargando(true);

      try {
        //fetch(url)
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data: T[] = await response.json();
        setData(data);
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

  return { data, cargando, error };
}
