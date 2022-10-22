import Swal from "sweetalert2";

export const agregarCarrito = (producto) => {
    let productosPedido = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO)) || [];
    productosPedido.push(producto);
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_PRODUCTOS_PEDIDO, JSON.stringify(productosPedido));
    Swal.fire(
      'Producto agregado',
      'El producto fue agregado correctamente',
      'success'
    );
}
