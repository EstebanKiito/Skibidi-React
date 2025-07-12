import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userForm } from "../schemas/user.ts";

//type Form = {
//  name: string;
//  lastname: string;
//};

function Form() {
  // ---- ZOD RESOLVER ---- npm i @hookform/resolvers@3.3.4

  //const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userForm>({
    resolver: zodResolver(userSchema), // Usamos Zod para validar el formulario
  });

  //console.log(register("name"));
  // console.log(formState.errors);
  const onSubmit = (data: userForm) => {
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
        {errors?.name?.message ?? <p>{errors?.name?.message}</p>}
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
        {errors?.lastname?.message ?? <p>{errors?.lastname?.message}</p>}
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
