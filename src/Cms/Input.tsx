import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  children?: ReactNode;
};

function Input({ name, children }: Props) {
  const { register } = useFormContext(); // Obtenemos el contexto del formulario
  // Ahora agregar provider en el componente padre

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
    </div>
  );
}

export default Input;
