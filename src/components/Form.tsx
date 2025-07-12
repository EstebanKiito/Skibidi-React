import { useForm } from "react-hook-form";
import { userSchema } from "../schemas/user.ts";

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
    try {
      const x = userSchema.parse(data); // Validamos los datos del formulario con Zod
      console.log(x);
    } catch (e) {
      console.error(e);
    }
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
          {...register("name")}
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
          {...register("lastname")}
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
