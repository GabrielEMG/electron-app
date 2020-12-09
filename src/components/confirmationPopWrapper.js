import { useState, cloneElement } from "react";
import { Button } from "@material-ui/core";

const ConfirmationPopWrapper = (props) => {
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [doAction, setDoAction] = useState(false);
  return (
    <>
      {displayConfirmation && (
        <div
          onClick={() => setDisplayConfirmation(false)}
          style={{
            position: "absolute",
            zIndex: 2,
            backgroundColor: "rgba(20,20,20,0.2)",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              backgroundColor: "white",
              zIndex: 3,
              top: "50%",
              left: "50%",
              width: "40%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <h5>confirmar {props.action}</h5>
            <Button onClick={() => setDoAction(true)}>si</Button>
            <Button onClick={() => setDisplayConfirmation(false)}>no</Button>
          </div>
        </div>
      )}
      {cloneElement(props.children, {
        doAction: doAction,
        display: setDisplayConfirmation,
      })}
    </>
  );
};

export default ConfirmationPopWrapper;
