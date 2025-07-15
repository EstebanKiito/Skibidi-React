import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  children?: ReactNode;
};

function Input({ name, children }: Props) {
  const { register, formState, getFieldState } = useFormContext(); // Obtenemos el contexto del formulario
  // 1. Ahora agregar provider en el componente padre (ConctactForm.tsx)
  // 2. Mostrar mensajes de error: formState y getFieldState
  const { error } = getFieldState(name, formState);

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {children}
      </label>
      <input
        //{...methods.register("name")} // Registramos el campo "name" -> Aqui no tenemos methods!
        //{...register("name")} -> Con esto no se guardan los datos
        {...register(name)}
        type="text"
        className="form-control"
        id={name}
      />
      {error?.message && <div className="text-danger">{error.message}</div>}
    </div>
  );
}

export default Input;
