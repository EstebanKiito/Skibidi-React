import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

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
        <Input name="lastname">Apellido</Input>
        <Input name="email">Correo</Input>
        <Button>Enviar</Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
