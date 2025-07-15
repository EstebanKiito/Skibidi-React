import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Contact, contactSchema } from "../schemas/Contact.tsx";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

function ContactForm({}: Props) {
  // 1. Añadimos React Hook Form
  // 2. Conectar Zod con el Formulario : Pasar el tipo
  // 3. Pasar el objeto Resolver de Zod a useForm
  const methods = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

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
