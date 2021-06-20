const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  const email = document.querySelector("#email-input");
  email.value;
  // 2. Obtenemos los datos ingresados en el input de password
  const contraseña = document.querySelector("#password-input");
  contraseña.value; 
  // 3. Obtenemos el valor del input radio
  const radio = document.querySelectorAll(".age-input");
  const options = [];
  radio.forEach(option => {
    options.push(option.checked);
  });
  // 4. Obtenemos el valor del input checkbox
  const checkbox = document.querySelector("#tyc-input");
  checkbox.checked;
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  function esMayorDeEdad() {
    if (options[0]) {
      return true;
    } else {
      alert("Debes ser mayor de edad para registrarte en el sitio");
    }
  }
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  function aceptoTyC() {
    if (checkbox.checked) {
      return true;
    } else {
      alert("Debes aceptar los TyCs para registrarte en el sitio");
    }
  }
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  const informacionUsuario = [];
  function infoUsuario() {
    if (esMayorDeEdad() && aceptoTyC()) {
      informacionUsuario.push(
        {
          email:`${email.value}`,
          password: `${contraseña.value}`,
          legalAge: options[0],
          tycAccepted: checkbox.checked
        }
      );
    }
  }
  infoUsuario();
  console.log(informacionUsuario);
});
