import React, { useState } from 'react';
import { Form, Button, FormSelect, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './AdminCrearProducto.css';
const AdminCrearProducto = () => {
    const [nombreProducto, setNombrePorducto] = useState('');
    const [precio, setPrecio] = useState(0);
    const [imagen, setImagen] = useState('');
    const [detalleProducto, setDetalleProdcuto] = useState('');
    const [categoria, setCategoria] = useState('');
    const [estadoProducto, setEstadoProducto] = useState(false);

    const URL = process.env.REACT_APP_API_USUARIOS;
    const navegacion = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //validar los datos

        console.log('los datos son correctos crear el objeto');
        //crear un objeto
        const nuevoPorducto = {
            nombre: nombreProducto,
            precio: precio,
            imagen: imagen,
            categoria: categoria,
            detalle: detalleProducto,
            estado: estadoProducto,
        };
        console.log(nuevoPorducto);

        try {
            const respuesta = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoPorducto),
            });
            if (respuesta.status === 201) {
                //redireccionar a la pagina de administracion
                navegacion('/administrador');
            }
        } catch (error) {
            console.log(error);
            //mostrar mensaje al ususario
        }
    };

    return (
        <section className="imagen justify-content-center  px-10  py-10">
            <Card className="card-effect  rounded bg-form px-0">
                <div className="bg-dark rounded py-2">
                    <h1 className="title-typography text-center text-light">
                        Agregar nuevos productos
                    </h1>
                </div>
                <Form
                    className="container pt-4 text-light"
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre producto *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: hamburguesa burguerbeer"
                            onChange={(e) => setNombrePorducto(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Detalle *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: hamburguesa especial de burguerandbeer preparada con los mejores ingredientes"
                            onChange={(e) => setDetalleProdcuto(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Precio *</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ej: 900"
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Imagen URL *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            onChange={(e) => setImagen(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Categoria del producto *</Form.Label>
                        <Form.Select
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="">Seleccione una opcion</option>
                            <option value="hamburguesa">hamburguesas</option>
                            <option value="cerveza">cervezas</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Estado *</Form.Label>
                        <FormSelect
                            onChange={(e) => setEstadoProducto(e.target.value)}
                        >
                            <option value="">Seleccione una opcion</option>
                            <option value="true">Producto disponible</option>
                            <option value="false">
                                Producto no disponible
                            </option>
                        </FormSelect>
                    </Form.Group>
                    <Button
                        variant="outline-light"
                        className="mb-3"
                        type="submit"
                    >
                        Agregar Producto
                    </Button>
                </Form>
            </Card>
        </section>
    );
};

export default AdminCrearProducto;
