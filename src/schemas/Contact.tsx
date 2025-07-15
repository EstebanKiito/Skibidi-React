import { z } from "zod";

export const contactTypeOptions = [
  "Familiar",
  "Trabajo",
  "Amigo",
  "Otro",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nombre es requerido" })
    .min(3, { message: "Longitud minima 3" }),
  lastname: z
    .string()
    .min(1, { message: "Apellido es requerido" })
    .min(3, { message: "Longitud minima 3" }),
  email: z.string().min(1, { message: "Correo es requerido" }),
  type: z.enum(contactTypeOptions),
});

// Inferir tipo de contactos
export type Contact = z.infer<typeof contactSchema> & { id: string };

// si dejamos mouse sobre Contact: Nos muestra el typo
// Le añadimos un id de tipo string para poder identificar cada contacto
// No lo ponemos dentro del schema porque no es parte de la validacion, es un campo extra que necesitamos para identificar cada contacto
