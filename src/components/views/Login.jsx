<<<<<<< HEAD
import React from "react";
import { Alert, Form, Button, Card } from "react-bootstrap";
import { useState, useNavigate } from "react";
=======
import React, { useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { validarEmail, cantidadCaracteres } from "./helperUsuario";
import Swal from "sweetalert2";
>>>>>>> dev
import "./login.css";
import Swal from "sweetalert2";

<<<<<<< HEAD
const Login = (props) => {
    const API_AUTH = process.env.REACT_APP_API_AUTH;
=======
const Login = ({ setUsuarioLogueado }) => {
  const API_AUTH = process.env.REACT_APP_API_USUARIOS;
>>>>>>> dev

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [mensajeError, setMensajeError] = useState("");

<<<<<<< HEAD
    //inicializar useNavigate
    // const navigate = useNavigate();
=======
  const navigate = useNavigate();
>>>>>>> dev

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

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

    if (!email || email === "") newErrors.email = "Ingrese su email";
    else if (!cantidadCaracteres(email, 4, 70))
      newErrors.email = "El email debe tener entre 4 y 70 caracteres";
    else if (!validarEmail(email)) newErrors.email = "Ingrese un email válido";

<<<<<<< HEAD
        const usuario = form;
        usuario.valido = false; //invalido por defecto
        setMensajeError("");
        /*
        props.setAdminLogged(false);
        if (usuario.email==='admin@gmail.com' && usuario.password ==='12345')
        {
            usuario.valido=true;
            usuario.perfil='admin';
            //setLoggedUser(usuario);
            //props.setAdminLogged(true);
            //props.setSesionIniciada(true);
            //navigate("/receta/administrar");
        }
        else if (usuario.email==='user@gmail.com' && usuario.password ==='12345') 
        {
            usuario.valido=true;
            usuario.perfil='usuario';
            //setLoggedUser(usuario);
            //props.setSesionIniciada(true);
            //navigate("/");
        }
        else {
            //props.setSesionIniciada(false);
            setMensajeError('Usario o contraseña no válido(s)');
        }
        */

        try {
            const respuesta = await fetch(API_AUTH, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario),
            });
            console.log(respuesta);
            if (respuesta.status === 201) {
                //usuario validado
                //redirecciono a página anterior
                //navegacion(-1);
            } else {
                //usuario no validado
            }
        } catch (error) {
            Swal.fire("Error en Login", "No se pudo iniciar sesion, intente nuevamente en unos minutos", "error");
        }
    };

    return (
        <section className="container">
            <div className="row">
                <article className="col-12 col-md-6 bg-login">
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
                        <Button variant="primary" type="submit" className="me-1">
                            Ingresar
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                /*navigate("/");*/
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
                <article className="col-12 col-md-6 bg-gris px-3">
                    <h2 className="display-6 mt-5">No sos miembro aún?</h2>
                    <p>Registrate y obtené descuentos y promociones, participá en sorteos y muchas otras ventajas.</p>
                    <Button>Quiero registrarme</Button>
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
=======
 
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validar
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {

      setErrors(newErrors);
      return;
    }

    const usuario = form;
    usuario.valido = false; 
    setMensajeError("");

    try {
      const respuesta = await fetch(API_AUTH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (respuesta.status === 200) {
        const data = await respuesta.json();
      
        setUsuarioLogueado(data);
        localStorage.setItem(
          process.env.REACT_APP_LOCALSTORAGE,
          JSON.stringify(data)
        );
       
        navigate(-1);
      } else {
        Swal.fire(
          "Error en Login",
          "No se pudo iniciar sesion, el usuario y/o la contraseña son incorrectos",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error en Login",
        "No se pudo iniciar sesion, intente nuevamente en unos minutos",
        "error"
      );
    }
  };

  return (
    <section className="container-fluid color-texto">
      <div className="row rowLadrillo sectionLogin">
        <article className="col-12 col-md-6 bg-login px-5">
          <h3 className="mt-5">Ingrese su email y contraseña</h3>
          {/* <hr /> */}
          <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 p-3 bg-grupo" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="custom-input"
                type="text"
                placeholder="tumail@gmail.com"
                onChange={(e) => setField("email", e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 p-3 bg-grupo" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className="custom-input"
                type="password"
                onChange={(e) => setField("password", e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <a href="#" className="ms-1">Olvidé la contraseña</a>
              <br />
            </Form.Group>
            <Button variant="outline-light" type="submit" className="me-1 botonLogin">
              Ingresar
            </Button>
            <Button
              variant="outline-light"
              className="botonLogin"
              onClick={() => {
                navigate(-1);
              }}
            >
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
          <h3 className="mt-5">No sos miembro aún?</h3>
          <p>
            Registrate y obtené descuentos y promociones, participá en sorteos y
            muchas otras ventajas.
          </p>
          <Button
            variant="outline-light"
            className="mb-3 botonLogin"
            onClick={() => {
              navigate("/registro");
            }}
          >
            Quiero registrarme
          </Button>
          <hr />
          <h3 className=" mt-2">Política de seguridad</h3>
          <p>
            Sabemos que compartir su información personal con nosotros se basa
            en la confianza. Nos tomamos esto en serio y nos comprometemos a
            garantizar que respetamos su privacidad cuando visita nuestro sitio
            web o utiliza nuestros servicios.
          </p>
        </article>
      </div>
    </section>
  );
>>>>>>> dev
};

export default Login;
