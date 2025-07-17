import { ReactNode } from "react";

// PRO TIP: Definir los tipos de variantes
type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit";

type Props = {
  variant?: variant;
  children: ReactNode;
  type?: buttonType;
  onClick?: () => void;
};

function Button({
  variant = "primary",
  children,
  type = "button",
  onClick,
}: Props) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
