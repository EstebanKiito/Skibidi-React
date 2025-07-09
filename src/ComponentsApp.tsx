import { useState } from "react";
import Alert from "./components/Alert";
import Button2 from "./components/Button2";

function AlertApp() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    console.log("Alert clicked!");
    setIsClicked(!isClicked);
  };

  return (
    <div className="container mt-5">
      <Alert
        onClick={() => {
          console.log("Alert clicked!");
          handleClick();
        }}
        isClicked={isClicked}
      >
        ¡Alerta!
      </Alert>
    </div>
  );
}

function ButtonApp() {
  const [isSent, setIsSent] = useState(false);
  const handleClick = () => {
    console.log("Button clicked!");
    setIsSent(true);
  };
  return (
    <div className="container mt-5">
      <Button2 onClick={handleClick} isSent={isSent}>
        Enviar
      </Button2>
    </div>
  );
}

//export default AlertApp;
export default ButtonApp;
