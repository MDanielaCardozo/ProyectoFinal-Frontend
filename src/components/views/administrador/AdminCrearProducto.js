import React from 'react';
import { Form, Button, FormSelect, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './AdminCrearProducto.css';
const AdminCrearProducto = () => {
    return (
        <section className="imagen justify-content-center  px-10  py-10">
            <Card className="card-effect  rounded bg-form px-0">
                <div className="bg-dark rounded py-2">
                    <h1 className="title-typography text-center text-light">
                        Agregar nuevos productos
                    </h1>
                </div>
                <Form className="container pt-4 text-light">
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre producto *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: hamburguesa burguerbeer"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Detalle *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: hamburguesa especial de burguerandbeer preparada con los mejores ingredientes"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Precio *</Form.Label>
                        <Form.Control type="number" placeholder="Ej: 900" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Imagen URL *</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Categoria del producto *</Form.Label>
                        <Form.Select>
                            <option value="">Seleccione una opcion</option>
                            <option value="hamburguesa">hamburguesas</option>
                            <option value="cerveza">cervezas</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Estado *</Form.Label>
                        <FormSelect>
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
