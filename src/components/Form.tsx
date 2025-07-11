import { useForm } from "react-hook-form";

type Form = {
  name: string;
  lastname: string;
};

function Form() {
  // ---- REACT HOOK FORM ----: npm install react-hook-form (use la 7.51.3)

  //const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>(); // Le damos el tipo de datos que vamos a manejar en el form

  //console.log(register("name"));
  // console.log(formState.errors);
  const onSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    //<form onSubmit={handleSubmit((data) => console.log(data))}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          {...register("name", {
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
          })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors?.name && <p>{errors?.name?.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          {...register("lastname", {
            validate: (valor) =>
              valor.length < 4 ? "Largo minimo 3 caracteres" : true,
          })} // Con esto registramos los campos del form, falta obtener los valores
          type="text"
          id="lastname"
          className="form-control"
        />
        {errors?.lastname && <p>{errors?.lastname?.message}</p>}
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
