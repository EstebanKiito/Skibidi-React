// Shift + Comand + R: Snippet with react TSRFCE:
// Create a React Functional Component

import { useState } from "react";

// import { MouseEvent } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void; // onSelect es una funcion que recibe un string
};

function List({ data, onSelect }: Props) {
  // Componente List: Ahora con State: Se volvera a renderizar cuando se cambie el estado!
  // Todos los componentes tienen estados diferentes!
  const [index, setIndex] = useState(1); // HOOK: UseState: Retorna [var, function actualizadora de estado]

  // const handleClick = (e: MouseEvent) => { Asi recibo el evento
  const handleClick = (i: number, elemento: string) => {
    //index = i; // Sin Estados: React no sabe que ha cambiado el valor de index
    setIndex(i); // Con Estados: React sabe que ha cambiado el valor de index
    onSelect?.(elemento); // ?. : Si onSelect esta definida, la llamo
  };

  //TIP:  Comand + D, tomar todas las var con mismo nombre!
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        //<li onClick={handleClick} key={elemento} className="list-group-item">
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
