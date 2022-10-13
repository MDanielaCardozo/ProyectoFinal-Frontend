export const validarNombre = (input) => {
  console.log(input);
  if (input.length >= 2 && input.length <= 50) {
    return true;
  } else {
    console.log("Corregir nombre");
    return false;
  }
};

export const validarDetalle = (input) => {
  console.log(input);
  if (input.length >= 5 && input.length <= 500) {
    return true;
  } else {
    console.log("Corregir detalle");
    return false;
  }
};

export const validarPrecio = (input) => {
  console.log(input);
  let patron = /^[\d]{1,4}$/;
  if (patron.test(input)) {
    return true;
  } else {
    console.log("Corregir precio");
    return false;
  }
};

export function campoRequerido(input) {
  console.log(input);
  if (input.length > 0) {
    return true;
  } else {
    console.log("Campo requerido");
    return false;
  }
}

export function validarUrl(input) {
  console.log(input);
  let patron = /^(ftp|http|https):\/\/[^ "]+$/;
  if (patron.test(input)) {
    return true;
  } else {
    console.log("Corregir url");
    return false;
  }
}

export function validarEstado(input) {
  console.log(input);
  if (input.value.isBoolean()) {
    return true;
  } else {
    return false;
  }
}
