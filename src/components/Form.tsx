import React, { FormEvent, useRef } from "react";

type Props = {};

function Form({}: Props) {
  // 1. UNCONTROLLED COMPONENT: React no sabra el estado hasta el submit

  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const user = {
      name: nameRef.current?.value,
      lastname: lastnameRef.current?.value,
      // current? es para acceder al valor del input si es que existe
    };
    console.log("Usuario:", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input ref={nameRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          ref={lastnameRef}
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
