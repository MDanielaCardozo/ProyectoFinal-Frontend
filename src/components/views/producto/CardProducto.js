import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DetalleProducto from "./DetalleProducto";

const CardProducto = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        className="btn btn-outline-light"
        type="submit"
        onClick={handleShow}
      >
        Ver mas
      </Button>

      <DetalleProducto show={show} handleClose={handleClose} />
    </div>
  );
};

export default CardProducto;
