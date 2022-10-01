import React, { useState } from 'react';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import './registro.css';
import { cantidadCaracteres } from './helperUsuario';

const Registro = () => {
    const [nombre, setnombre] = useState('');
    const [email, setemail] = useState('');
    const [clave, setclave] = useState('');
    const [msjError, setMsjError] = useState(false);

    const URL = process.env.REACT_APP_API_USUARIOS;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cantidadCaracteres(nombre, 4, 15)) {
             setMsjError(false);
            const nuevoUsario = {
                nombre,
                email,
                password: clave,
                estado: true,
                perfil: true,
            };
           
            try {
                const parametroPeticion = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nuevoUsario),
                };
                const respuesta = await fetch(URL, parametroPeticion);
                if (respuesta.status === 201) {
                    console.log('el producto se creo correctamente');
                }
            } catch (error) {
                console.log('Error');
            }
        }else{
            setMsjError(true)
        }
    };

    return (
        <main className="imagen justify-content-center  px-20  ">
            <Card className="container  rounded bg-form px-0">
                <div className="bg-dark rounded py-2">
                    <h1 className="fs-4 fw-light text-center text-light">
                        Complete el formulario para Registrarse
                    </h1>
                </div>
                <Form className="container" onSubmit={handleSubmit}>
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
                                    onChange={(e) => setnombre(e.target.value)}
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
                                    onChange={(e) => setemail(e.target.value)}
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
                                    onChange={(e) => setclave(e.target.value)}
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
                </Form>
                {msjError ? (
                    <Alert variant="danger" className=" mx-3">
                        No pudimos crear el usuario, verifica los datos
                        ingresados y vuelve a intentar!
                    </Alert>
                ) : null}
            </Card>
        </main>
    );
};

export default Registro;
