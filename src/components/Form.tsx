import React, { FormEvent, useState } from "react";

type Props = {};

function Form({}: Props) {
  // 2. CONTROLLED COMPONENT: El valor del input es controlado por el estado de React
  // Siempre deberemos añadir 2 propiedades a los inputs: value y onChange
  // Esto se puede mejorar con bibliotecas!

  const [user, setUser] = useState({ name: "", lastname: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          value={user.name} // Esto porque es un componente controlado
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          value={user.lastname} // Esto porque es un componente controlado
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          type="text"
          id="lastname"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
