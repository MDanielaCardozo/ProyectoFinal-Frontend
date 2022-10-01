import React from 'react';
import { Form,Card,Button } from 'react-bootstrap';
import './registro.css'
const Registro = () => {
    return (
        <main className="imagen justify-content-center  px-20  ">
            <Card className="container  rounded bg-form px-0">
                <div className="bg-dark rounded py-2">
                    <h1 className="fs-4 fw-light text-center text-light">
                        Complete el formulario para Registrarse
                    </h1>
                </div>
                <div className="container">
                    <div className="row py-4">
                        <div className="col-12 ">
                            <Form.Group
                                className="mb-3 text-light"
                                controlId="formAdmin"
                            >
                                <Form.Label>Nombre*</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: Admin"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-12 ">
                            <Form.Group
                                className="mb-3 text-light"
                                controlId="formEmail"
                            >
                                <Form.Label>email*</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: juanperez@gmail.com"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-12 ">
                            <Form.Group
                                className="mb-3 text-light"
                                controlId="formClave"
                            >
                                <Form.Label>Contraseña*</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: 1234admin"
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Button
                        variant="outline-light"
                        className="mb-3"
                        type="submit"
                    >
                        Ingresar
                    </Button>
                </div>
            </Card>
        </main>
    );
};

export default Registro;