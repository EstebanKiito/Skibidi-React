import { ReactNode } from "react";

type Props = {
  children: ReactNode; // Children es una propiedad especial de React que permite pasar contenido dentro del componente:
  isLoading?: boolean; // Propiedad para indicar si el botón está en estado de carga
  onClick: () => void;

  // <Button isLoading={isLoading} onClick={handleClick}> Hola Mundo  </Button>
};

function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      //disabled={isLoading}
      type="button"
      //className={`btn btn-${!isLoading ? "primary" : "secondary"}`}
      className={`btn btn-primary`}
    >
      {children}
    </button>
  );
}

// Disable: el boton queda deshabilitado
// onClick: es la funcion que se ejecuta al hacer click en el boton
// isLoading: es una propiedad que indica si el boton esta en estado de carga
// children: es el contenido del boton, que puede ser un texto o un componente

export default Button;
