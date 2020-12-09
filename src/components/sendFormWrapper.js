import { useState, cloneElement } from "react";
import { Button } from "@material-ui/core";

const SendFormWrapper = (props) => {
  const [created, setCreated] = useState(false);

  return (
    <div>
      {created ? (
        <div>
          <h5>{props.message}</h5>
          <Button onClick={() => setCreated(false)}>{props.button}</Button>
        </div>
      ) : (
        cloneElement(props.children, { sended: setCreated })
      )}
    </div>
  );
};

export default SendFormWrapper;
