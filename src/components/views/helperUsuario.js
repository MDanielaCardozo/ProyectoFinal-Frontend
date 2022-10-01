export const cantidadCaracteres = (input, min, max) => {
    if (input.length >= min && input.length <= max) {
        return true;
    } else {
        return false;
    }
};
