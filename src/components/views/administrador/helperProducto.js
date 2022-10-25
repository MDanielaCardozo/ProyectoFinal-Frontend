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
