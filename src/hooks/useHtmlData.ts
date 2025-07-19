// Tiene que llamarse useState useUser useContext... parte con use

import { useEffect, useState } from "react";

export default function useHtmlData<T>(url: string) {
  // Añadir Users con POST

  const [data, setData] = useState<T[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController(); // Controlador para cancelar la petición si el componente se desmonta
    const { signal } = controller; // Señal para pasar al fetch (para cancelarlo)

    async function hook() {
      setCargando(true);

      try {
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

  const addData = async (elemento: T) => {
    // Estrategia Optimistic UI:
    // Agregar un recurso -> Cambiar el estado ->  (POST)
    // Si algo falla, revertir el estado
    const initialData = [...data]; // Guardamos el estado inicial para revertir en caso de error
    setData([{ id: 0, ...elemento }, ...data]); // Agregamos el nuevo elemento al inicio del array
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(elemento),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Devolver estado a como estaba antes
        setData(initialData); // Revertimos al estado inicial si la petición falla
        throw new Error(`${response.status}`);
      }

      // Si la peticion es exitosa, nos retorna el elemento creado con un id
      const savedData = await response.json();
      setData([savedData, ...initialData]);

      // Importante: esta api nos devuelve el objeto completo creado + el id
      // Otras Api no hacen esto, y tendriamos que darle un ID:
      // setData([{ id: savedData.id, ...elemento }, ...initialData]);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return { data, cargando, error, addData };
}
