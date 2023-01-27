
export const validate = (userData) => {
    let errors = {};
    //validaciones para el username
    if(!userData.username.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      errors.username = "El nombre de usuario debe ser un correo electrónico válido";
    }
    if(userData.username.length === 0) {
      errors.username = "El nombre de usuario no puede estar vacío";
    }
    if(userData.username.length > 35) {
      errors.username = "El nombre de usuario no puede tener más de 35 caracteres";
    }
    //validaciones para la contraseña
    if(!userData.password.match(/\d/)) {
      errors.password = "La contraseña debe tener al menos un número";
    }
    if(userData.password.length < 6 || userData.password.length > 10) {
      errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }
    return errors;
  }