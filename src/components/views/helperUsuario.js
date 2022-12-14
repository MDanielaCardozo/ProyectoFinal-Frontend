export const cantidadCaracteres = (input, min , max) => {
    if (input.length >= min && input.length <= max) {
        return true;
    } else {
        return false;
    }
};

export function validarclave(input) {
    let patron =
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/; 

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

export function validarNombre(input){
    let patron = /^[a-zA-Z]+([ ][a-zA-Z]+)*$/;
    if (patron.test(input)){
        return true
    }else{
        return false
    }
}
