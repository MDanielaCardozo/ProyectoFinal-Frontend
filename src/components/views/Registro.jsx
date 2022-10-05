import React, { useEffect, useState } from 'react';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import './registro.css';
import {
    cantidadCaracteres,
    validarclave,
    validarGmail,
    chequearExistenciaEmail,
} from './helperUsuario';
import { useNavigate } from 'react-router-dom';

const Registro = ({setUsuarioLogueado}) => {
    const [nombre, setnombre] = useState('');
    const [email, setemail] = useState('');
    const [clave, setclave] = useState('');
    const [msjError, setMsjError] = useState(false);
    const [msjErrorclave, setmsjErrorclave] = useState(false);
    const [msjErroremail, setmsjErroremail] = useState(false);
    const [datosAdmin, setDatosAdmin] = useState([]);

    const URL = process.env.REACT_APP_API_USUARIOS;

    const navigate = useNavigate();
    // useEffect(() => {
    //     consultarAPI();
    // }, []);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL);
            const obtenerAdministrador = await respuesta.json();
            setDatosAdmin(obtenerAdministrador);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validaciones
        if (validarclave(clave))
            setmsjErrorclave(false);
        else 
            setmsjErrorclave(true);
        
        // //esta linea encuentra un mail en la BD que concida con el email ingresado (devuelve un objeto)
        // const usuario = datosAdmin.find((element) => element.email === email);
        // if (chequearExistenciaEmail(usuario, email)) {
        //     setmsjErroremail(false);
        // } else setmsjErroremail(true);

        // console.log(chequearExistenciaEmail(usuario, email));
        // console.log(cantidadCaracteres(nombre, 4, 15));
        // console.log(validarclave(clave));
        // console.log(validarGmail(email));

        if (
            // chequearExistenciaEmail(usuario, email) &&
            cantidadCaracteres(nombre, 4, 15) &&
            validarclave(clave) &&
            validarGmail(email)
        ) {
            setMsjError(false);
            const nuevoUsario = {
                nombre,
                email,
                password: clave,
                estado: true,
                perfil: true,
            };

            try {
                const parametrosPeticion = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nuevoUsario),
                };
                const respuesta = await fetch(URL + '/nuevo', parametrosPeticion);
                if (respuesta.status === 201) {
                    const data = await respuesta.json();
                    //almaceno el usuario en el state y localstorage
                    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify(data)); //localStorage.setItem("tokenCafe", JSON.stringify(data));
                    setUsuarioLogueado(data);
                    //redireccionar a la página desde donde se llamó
                    navigate(-1);                
                }
            } catch (error) {
                console.log('Error');
            }
        } else {
            setMsjError(true);
        }
    };

    return (
        <div className="imagen justify-content-center  px-20  ">
            <Card className="container  rounded bg-form px-0">
                <div className="bg-dark rounded py-2">
                    <h1 className="title-typography text-center text-light">
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
                                    placeholder="Entre (4 y 15) caracteres"
                                    onChange={(e) =>
                                        setnombre(e.target.value.trim())
                                    }
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
                                    onChange={(e) =>
                                        setemail(e.target.value.trim())
                                    }
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
                                    onChange={(e) =>
                                        setclave(e.target.value.trim())
                                    }
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Button
                        variant="outline-light"
                        className="mb-3"
                        type="submit"
                    >
                        Registrar
                    </Button>
                </Form>
                {msjError ? (
                    <Alert variant="danger" className=" mx-3">
                        No pudimos crear el usuario, verifica los datos
                        ingresados y vuelve a intentar!
                    </Alert>
                ) : null}
                {msjErrorclave ? (
                    <Alert variant="danger" className=" mx-3">
                        CLAVE ! :Introducir entre 8 y 15 caracteres con al menos
                        una letra minúscula, una mayúscula, un digito y un
                        caracter especial.
                    </Alert>
                ) : null}
                {msjErroremail ? (
                    <Alert variant="danger" className=" mx-3">
                        El email ingresado ya exite, por favor introduce un
                        email valido.
                    </Alert>
                ) : null}
            </Card>
        </div>
    );
};

export default Registro;
