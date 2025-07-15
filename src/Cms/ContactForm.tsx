import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";

type Props = {};

function ContactForm({}: Props) {
  // Añadimos React Hook Form
  const methods = useForm();

  //Agregar provider en el componente padre:
  // 1. Shift+ctrl+p : Envolver todo con FormProvider
  // 2. Hacer destructuring de methods
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Nombre</Input>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
