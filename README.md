# Proyecto Final - c2i
<p align="center"> <img src="src/img/logoLed.png" alt="logo-burgerhouse" height="200" width="200"/> </p>

## 👪 Integrantes 
- [Andrade Francisco](https://github.com/franAndrad)
- [Andrade Nicolas](https://github.com/nicolasandr)
- [Cardozo Daniela](https://github.com/MDanielaCardozo)
- [Escobar Carlos](https://github.com/carlosmsx)
- [Garcia Mauro Nicolás](https://github.com/Ao-Rubi)
- [Krautmann Otto](https://github.com/OttoKrautmann)
- [Menichetti Juan](https://github.com/JuanMeni)
- [Ormaechea Valentina](https://github.com/valeormaechea)

## 📜 Requerimientos 

- **Login**: Pantalla de login donde el usuario puede autenticarse o darse de alta a través de un enlace al formulario de
registro.
- **Registro**: Puede ser una página o un modal donde el usuario nuevo puede darse de alta. Los datos indispensables para
permitir el ingreso deben ser un email y contraseña, pueden agregar más datos si lo desean.
- **Pagina Principal**: Pantalla principal con información del restaurante y los productos disponibles para que los usuarios puedan
seleccionar los que deseen (si quiero crear un pedido seleccionando las opciones de la página principal me
debe pedir previamente que este logueado)
- **Pagina de detalle**: Al seleccionar un producto de la página principal, se debe diseñar una página con el detalle del producto o
ventana modal, donde se visualicen correctamente los datos del producto.
- **Pedidos**: Una página que contendrá los menús seleccionados por el usuario y su costo total. Deberá tener un botón
de hacer pedido. Al hacer clic el pedido se guardará en la BD con un estado pendiente y mostrar al usuario
un mensaje que su pedido fue correctamente realizado.
- **Pagina del administrador**: El usuario administrador debe poder acceder a una página donde se muestran los listados de usuarios,
productos del menú y pedidos solicitados, además debe poder realizar las siguientes operaciones:
- **Usuarios**: Listar los usuarios
- **Productos** del menú: Dar de alta productos, modificar productos, eliminar productos, listar productos
- **Pedidos**: Listar los pedidos, modificar el estado de los pedidos de pendientes a realizados
- **Acerca de**: Una página informativa que contendrá datos del grupo de desarrolladores del proyecto.
- **Error404**: Una página con el respectivo mensaje de error a donde deben dirigirnos en caso de no tener una
funcionalidad desarrollada.
## 📗 Bibliotecas externas

- Reac-Bootstrap
- Sweet Alert
- Route
- EmailJS

## ⬇️ Instalacion
El backend de esta pagina esta subido en vercel, por lo que podriamos utilizarlo realizando los siguientes comandos

1. Clonamos el repositorio
```
git clone https://github.com/Ao-Rubi/Proyecto-final-BackEnd.git
```
2. Instalamos todas las dependencias
```
npm i
```
3. Ejecutamos la aplicacion web
```
npm run
```
## ⬇️ Instalacion Local

### Opcion 1️⃣ 
Para poder utilizarlo de forma local, primero deberiamos descargar el [Backend](https://github.com/Ao-Rubi/Proyecto-final-BackEnd)

1. Clonamos el repositorio del frontend 
```
git clone https://github.com/Ao-Rubi/Proyecto-final-BackEnd.git
```

2. Instalamos todas las dependencias
```
npm i
```

2. Ejecutamos la aplicacion web
```
npm run
```
### Opcion 2️⃣
1. Clonamos el repositorio del frontend 
```
git clone https://github.com/Ao-Rubi/Proyecto-final-BackEnd.git
```

2. Instalamos todas las dependencias
```
npm i
```

3. Si tenemos instalado json server podemos simular una api ejecutando el siguiente comando en una terminal, de lo contrario instalarlo en [json server](https://www.npmjs.com/package/json-server) 

```
json-server --watch db.json --port 3005
```

4. Se debe crear un .env 
```
 REACT_APP_API_USUARIOS = http://127.0.0.1:4000/burgersandbeer/usuario
 REACT_APP_API_HAMBURGUESERIA = http://127.0.0.1:4000/burgersandbeer/
 REACT_APP_LOCALSTORAGE=c2i-logged-in-user
 REACT_APP_EMAILJS_SERVICE=service_z08q7pp
 REACT_APP_EMAILJS_TEMPLATE=template_fsc7oat
 REACT_APP_EMAILJS_PUBLICKEY=ljlFUBxSovTl5KuGl
```

5. En una terminal aparte ejecutamos la aplicacion web
```
npm run
```




