import { ReactNode } from "react";
import styles from "./Button2.module.css";
import { SiMinutemailer } from "react-icons/si";
import { FaCheck } from "react-icons/fa";

type props = {
  children: ReactNode;
  isSent?: boolean;
  onClick: () => void;
};

function Button2({ children, onClick, isSent }: props) {
  return (
    <button className={styles.button2} onClick={onClick} disabled={isSent}>
      {!isSent ? `${children}  ` : "Enviado "}
      {!isSent ? (
        <SiMinutemailer color="white" size="10" />
      ) : (
        <FaCheck color="white" size="10" />
      )}
    </button>
  );
}
export default Button2;
