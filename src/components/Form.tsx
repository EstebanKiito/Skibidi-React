import React, { FormEvent } from "react";

type Props = {};

function Form({}: Props) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    console.log("Enviando...");
  };

  return (
    // --- Creando Form Rapido con Emmet --- (Leer documentacion de Emmet!)
    // 1. form>div.mb-3*2>label.from-label+input#name.form-control
    // 2. button.btn.btn-primary
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input type="text" id="lastname" className="form-control" />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
