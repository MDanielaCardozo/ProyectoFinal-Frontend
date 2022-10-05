import React, {useState} from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./login.css";

const Login = ({setUsuarioLogueado}) => {
    const API_AUTH = process.env.REACT_APP_API_AUTH;

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [mensajeError, setMensajeError] = useState("");

    //inicializar useNavigate
    const navigate = useNavigate();

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            });
    };

    const findFormErrors = () => {
        const { email, password } = form;
        const newErrors = {};
        // email errors
        /*
        if ( !email || email === '' ) newErrors.email = 'Ingrese su email'
        else if (!cantidadCaracteres(email, 2, 30))  newErrors.email = 'El email debe tener entre 2 y 30 caracteres'
        else if (!validarEmail(email)) newErrors.email = 'Ingrese un email válido'
        */
        /*
        // password errors
        if ( !password || password === '' ) newErrors.password = 'Ingrese su password'
        else if (!cantidadCaracteres(password, 5, 10))  newErrors.password = 'La contraseña debe tener entre 5 y 10 caracteres'
        */
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validar
        const newErrors = findFormErrors();
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors);
            return;
        }

        const usuario = form;
        usuario.valido = false; //invalido por defecto
        setMensajeError("");

        try {
            const respuesta = await fetch(API_AUTH, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario),
            });
            console.log(respuesta);
            if (respuesta.status === 200) {
                const data = await respuesta.json();
                console.log(data)
                //almaceno el usuario en el state y localstorage
                setUsuarioLogueado(data)
                localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE, JSON.stringify(data))
                //redireccionar al home
                navigate('/')
            } else {
                Swal.fire("Error en Login", "No se pudo iniciar sesion, el usuario y/o la contraseña son incorrectos", "error");
            }
        } catch (error) {
            Swal.fire("Error en Login", "No se pudo iniciar sesion, intente nuevamente en unos minutos", "error");
        }
    };

    return (
        <section className="container-fluid">
            <div className="row rowBrick">
                <article className="col-12 col-md-6 bg-login px-5">
                    <h3 className="display-6 mt-5">Ingrese su email y contraseña</h3>
                    {/* <hr /> */}
                    <Form className="mt-4" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 bg-grupo" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                className="custom-input"
                                type="text"
                                placeholder="tumail@gmail.com"
                                onChange={(e) => setField("email", e.target.value)}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 bg-grupo" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="custom-input"
                                type="password"
                                onChange={(e) => setField("password", e.target.value)}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            <a href="#">Olvidé la contraseña</a><br/>
                        </Form.Group>
                        <Button variant="outline-light" type="submit" className="me-1">
                            Ingresar
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={() => {
                                navigate(-1);
                            }}>
                            Cancelar
                        </Button>
                    </Form>
                    {mensajeError !== "" ? (
                        <Alert className="mt-3" variant="danger">
                            {mensajeError}
                        </Alert>
                    ) : null}
                </article>
                <article className="col-12 col-md-6 bg-gris px-5">
                    <h2 className="display-6 mt-5">No sos miembro aún?</h2>
                    <p>Registrate y obtené descuentos y promociones, participá en sorteos y muchas otras ventajas.</p>
                    <Button variant="outline-light" className="mb-3" onClick={()=>{navigate("/registro")}}>Quiero registrarme</Button>
                    <hr />
                    <h2 className="display-6 mt-2">Politica de seguridad</h2>
                    <p>
                        Sabemos que compartir su información personal con nosotros se basa en la confianza. Nos tomamos esto en
                        serio y nos comprometemos a garantizar que respetamos su privacidad cuando visita nuestro sitio web o
                        utiliza nuestros servicios.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Login;
