import { useForm } from "react-hook-form";

type Props = {};

function ContactForm({}: Props) {
  // Añadimos React Hook Form
  const methods = useForm();
  return (
    <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          {...methods.register("name")} // Registramos el campo "name"
          type="name"
          className="form-control"
          id="name"
        />
      </div>
    </form>
  );
}

export default ContactForm;
