// npm i zod@3.22.4 (esa version usamos)
import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nombre es requerido" }) // Esto es porque si no, required_error no funciona
    .min(3, { message: "Longitud minima 3" }),
  lastname: z
    .string({ required_error: "Apellido es requerido" })
    .min(3, { message: "Longitud minima 3" }),
});

export type userForm = z.infer<typeof userSchema>;
// Inferimos el tipo de datos del schema para usarlo en el form
// Esto nos permite tener un tipo de datos que se ajusta a las validaciones del schema
