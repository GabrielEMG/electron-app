import { useState, cloneElement } from "react";
import { Button } from "@material-ui/core";

const PopMenu = (props) => {
  const [show, setShow] = useState(false);
  const [doAction, setDoAction] = useState(false);
  console.log(show, doAction);
  return (
    <>
      <Button onClick={() => setShow(true)}>{props.buttonTitle}</Button>
      {show && (
        <div
          onClick={(e) => {
            setShow(false);
            setDoAction(false);
          }}
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
            onClick={(e) => e.stopPropagation()}
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
            {cloneElement(props.children, { doAction, setDoAction, setShow })}
            <div>
              <Button
                onClick={(e) => {
                  setShow(false);
                }}
              >
                Cancelar
              </Button>
              <Button onClick={() => setDoAction(true)}>{props.action}</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopMenu;
