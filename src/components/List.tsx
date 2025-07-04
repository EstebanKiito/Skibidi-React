// Shift + Comand + R: Snippet with react TSRFCE:
// Create a React Functional Component

// import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  // const handleClick = (e: MouseEvent) => { Asi recibo el evento
  const handleClick = (element: string) => {
    console.log(element);
  };
  //TIP:  Comand + D, tomar todas las var con mismo nombre!
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        //<li onClick={handleClick} key={elemento} className="list-group-item">
        <li
          onClick={() => handleClick(elemento)}
          key={elemento}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
