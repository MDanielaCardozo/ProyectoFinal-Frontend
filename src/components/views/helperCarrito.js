import Swal from "sweetalert2";

export const agregarCarrito = (producto) => {
    const usuarioLogueado = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE)) || null
    if (usuarioLogueado != null) {
        let productosPedido = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO)) || [];
        productosPedido.push(producto);
        localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify(productosPedido));
        Swal.fire(
          'Producto agregado',
          'El producto fue agregado correctamente',
          'success'
        );
        return true;
    }
    return false;
}
