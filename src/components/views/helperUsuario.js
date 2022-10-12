export const cantidadCaracteres = (input, min, max) => {
    if (input.length >= min && input.length <= max) {
        return true;
    } else {
        return false;
    }
};
// Introducir entre 8 y 15 caracteres con al menos una letra minúscula, una mayúscula, un digito y un caracter especial.
export function validarclave(input) {
    let patron =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if (patron.test(input)) {
        return true;
    } else {
        return false;
    }
}
export function validarEmail(input) {
    let patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (patron.test(input)) {
        return true;
    } else {
        return false;
    }
}
export function chequearExistenciaEmail(emailBD) {
    if (emailBD !== undefined) {
        return false;
    } else {
        return true;
    }
}

