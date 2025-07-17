import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import {
  Contact,
  contactSchema,
  contactTypeOptions,
} from "../schemas/Contact.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select.tsx";

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContactForm({ onSubmit }: Props) {
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
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Correo</Input>
        <Select
          name="type"
          label="Tipo"
          defaultMessage="-- Selecciona Tipo --"
          options={contactTypeOptions}
        />
        <Button type="submit">Enviar</Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => methods.reset()}
        >
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
