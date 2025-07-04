interface CardProps {
  body: string; // Definimos que el body es un string
}

function Card(props: CardProps) {
  const { body } = props; // Recomendado Destructuring
  // porque asi sabremos que propiedades estamos teniendo

  return (
    <div
      className="card"
      style={{
        // 2 llaves (la primera es para evaluar el objeto, la seguna es del objeto)
        width: "350px",
      }}
    >
      <div className="card-body">{body}</div>
    </div>
  );
}

export function CardBody() {
  return (
    //<div> Vale la pena crear 1 div : Mejor usar Fragment ( <></>  )
    <>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card’s content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
    //</div>
  );
}

export default Card;
