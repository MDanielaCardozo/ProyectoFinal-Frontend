# Proyecto Final - c2i

## REQUERIMIENTOS

### LOGIN
Pantalla de login donde el usuario puede autenticarse o darse de alta a través de un enlace al formulario de
registro.
### REGISTRO
Puede ser una página o un modal donde el usuario nuevo puede darse de alta. Los datos indispensables para
permitir el ingreso deben ser un email y contraseña, pueden agregar más datos si lo desean.
### PAGINA PRINCIPAL
Pantalla principal con información del restaurante y los productos disponibles para que los usuarios puedan
seleccionar los que deseen (si quiero crear un pedido seleccionando las opciones de la página principal me
debe pedir previamente que este logueado)
### PAGINA DE DETALLE

Al seleccionar un producto de la página principal, se debe diseñar una página con el detalle del producto o
ventana modal, donde se visualicen correctamente los datos del producto.
### PEDIDOS
Una página que contendrá los menús seleccionados por el usuario y su costo total. Deberá tener un botón
de hacer pedido. Al hacer clic el pedido se guardará en la BD con un estado pendiente y mostrar al usuario
un mensaje que su pedido fue correctamente realizado.
### PAGINA DEL ADMINISTRADOR
El usuario administrador debe poder acceder a una página donde se muestran los listados de usuarios,
productos del menú y pedidos solicitados, además debe poder realizar las siguientes operaciones:
#### Usuarios
- Listar los usuarios

#### Productos del menú
- Dar de alta productos
- Modificar productos
- Eliminar productos
- Listar productos
#### Pedidos
- Listar los pedidos
- Modificar el estado de los pedidos de pendientes a realizados
### ACERCA DE
Una página informativa que contendrá datos del grupo de desarrolladores del proyecto.
### ERROR 404
Una página con el respectivo mensaje de error a donde deben dirigirnos en caso de no tener una
funcionalidad desarrollada.
## Integrantes
- Andrade Francisco
- Andrade Nicolas
- Cardozo Daniela
- Escobar Carlos
- Garcia Mauro Nicolás
- Krautmann Otto
- Menichetti Juan
- Ormaechea Valentina

## Bibliotecas externas

### Reac-Bootstrap
npm i react-bootstrap bootstrap

### Sweet Alert
npm i sweetalert2

### Route
npm i react-router-dom

### EmailJS
npm i @emailjs/browser --save
