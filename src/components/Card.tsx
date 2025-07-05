import { ReactNode } from "react";

interface CardProps {
  children: ReactNode; // Children es una propiedad especial de React que permite pasar contenido dentro del componente
}

function Card(props: CardProps) {
  const { children } = props; // Recomendado Destructuring
  // porque asi sabremos que propiedades estamos teniendo

  return (
    <div
      className="card"
      style={{
        // 2 llaves (la primera es para evaluar el objeto, la seguna es del objeto)
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title?: string;
  text?: string; // El ? indica que es opcional
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;

  return (
    //<div> Vale la pena crear 1 div : Mejor usar Fragment ( <></>  )
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
    //</div>
  );
}

export default Card;
