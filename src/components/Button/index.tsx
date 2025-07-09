import { ReactNode } from "react";
//import "./Button.module.css"; // Importamos el CSS del botón (MODULO CSS)
import styles from "./Button.module.css";
import { FaRegThumbsUp } from "react-icons/fa";

type Props = {
  children: ReactNode; // Children es una propiedad especial de React que permite pasar contenido dentro del componente:
  isLoading?: boolean; // Propiedad para indicar si el botón está en estado de carga
  onClick: () => void;

  // <Button isLoading={isLoading} onClick={handleClick}> Hola Mundo  </Button>
};
console.log(styles); // Esto nos muestra el objeto de estilos que se genera al importar el CSS
function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      //disabled={isLoading}
      type="button"
      // CLASE CSS: tiene que ser clase CSS y no html (div button h1) -> .div .button .h1 son CSS

      //className={styles.button}
      className={[styles.button, styles.padded].join(" ")} // MIXING STYLES

      //className={`btn btn-${!isLoading ? "primary" : "secondary"}`}
      //className={`btn btn-primary`}
    >
      {children}
      <FaRegThumbsUp color="blue" size="20" />
    </button>
  );
}

// Disable: el boton queda deshabilitado
// onClick: es la funcion que se ejecuta al hacer click en el boton
// isLoading: es una propiedad que indica si el boton esta en estado de carga
// children: es el contenido del boton, que puede ser un texto o un componente

export default Button;
