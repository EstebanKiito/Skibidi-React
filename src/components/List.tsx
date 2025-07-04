// Shift + Comand + R: Snippet with react TSRFCE:
// Create a React Functional Component

type Props = {
  data: string[];
};

function List({ data }: Props) {
  //TIP:  Comand + D, tomar todas las var con mismo nombre!
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li key={elemento} className="list-group-item">
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
