import { ReactNode } from "react";
import styles from "./Alert.module.css"; // Importamos el CSS del Alert (MODULO CSS

type Props = {
  children: ReactNode; // Children es una propiedad especial de React que permite pasar contenido dentro del componente
  isClicked?: boolean; // Propiedad para indicar si el botón está en estado de carga
  onClick: () => void;
};

function Alert({ children, onClick, isClicked }: Props) {
  //console.log("Children:", children); // Verificamos que los children se estén pasando correctamente

  return (
    <div
      className={[
        styles.alert,
        isClicked ? styles.alertPrimary : styles.alertSecondary,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Alert;
