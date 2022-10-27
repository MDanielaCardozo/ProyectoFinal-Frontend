export const validarNombre = (input) => {
  if (input.length >= 2 && input.length <= 50) {
    return true;
  } else {
    return false;
  }
};

export const validarDetalle = (input) => {
  if (input.length >= 5 && input.length <= 500) {
    return true;
  } else {
    return false;
  }
};

export const validarPrecio = (input) => {
  let patron = /^[\d]{1,4}$/;
  if (patron.test(input)) {
    return true;
  } else {
    return false;
  }
};

export function campoRequerido(input) {
  if (input.length > 0) {
    return true;
  } else {
    return false;
  }
}

export function validarUrl(input) {
  let patron = /^(ftp|http|https):\/\/[^ "]+$/;
  if (patron.test(input)) {
    return true;
  } else {
    return false;
  }
}

export function validarEstado(input) {
  if (input.value.isBoolean()) {
    return true;
  } else {
    return false;
  }
}

export const encontrarErrores = (producto) => {
  const newErrors = {};
  if (validarNombre(producto.nombre) === false) {
    newErrors.nombre =
      "El nombre debe tener un mínimo de 2 caracteres y un máximo de 50.";
  }
  if (validarPrecio(producto.precio) === false) {
    newErrors.precio = "El precio puede tener máximo 4 dígitos.";
  }
  if (validarDetalle(producto.detalle) === false) {
    newErrors.detalle =
      "El detalle debe tener un mínimo de 5 caracteres y un máximo de 500.";
  }
  if (validarUrl(producto.imagen) === false) {
    newErrors.imagen = "Debe ingresarse un URL.";
  }
  if (campoRequerido(producto.categoria) === false) {
    newErrors.categoria = "Este es un campo requerido.";
  }
  return newErrors;
};
