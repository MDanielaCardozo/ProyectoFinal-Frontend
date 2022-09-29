import React from 'react';
import { Form,Card,Button } from 'react-bootstrap';
import './registro.css'
const Registro = () => {
    return (
        <div className="imagen py-5 position-fixed px-20">
            <Card className="container my-5 bg-light  rounded bg-form  px-0">
                <div className="bg-dark rounded py-2">
                    <h1 className="fs-4 fw-light text-center text-light">
                        Complete el formulario para Registrarse
                    </h1>
                </div>
                <Form className="mb-3 container ">
                    <div className="row py-4">
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
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
                        <div className="col-12 col-md-6">
                            <Form.Group
                                className="mb-3 text-light"
                                controlId="formEstado"
                            >
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: estado"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group
                                className="mb-3 text-light"
                                controlId="formPerfil"
                            >
                                <Form.Label>Perfil</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ej: perfil"
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Button variant="outline-light" type="submit">
                        Ingresar
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Registro;