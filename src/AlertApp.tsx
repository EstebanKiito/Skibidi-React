import { useState } from "react";
import Alert from "./components/Alert";

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

export default AlertApp;
