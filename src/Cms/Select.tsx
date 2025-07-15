import { useFormContext } from "react-hook-form";

type Props = {
  options: readonly string[]; // Necesitamos el readonly para evitar modificaciones externas
  // De otra forma, nos marcara error al usar el componente
  defaultMessage: string;
  label: string;
  name: string; // Nombre del campo para el formulario
};

function Select({ options, defaultMessage, label, name }: Props) {
  const { register, formState, getFieldState } = useFormContext(); // Obtenemos el contexto del formulario
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...register(name)} // Registramos el campo "name"
        className="form-select"
        aria-label="Default select example"
      >
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error?.message && <div className="text-danger">{error.message}</div>}
    </div>
  );
}

export default Select;
