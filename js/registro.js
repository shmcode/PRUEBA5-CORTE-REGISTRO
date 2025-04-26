const form = document.querySelector("form");
const nombreField = document.getElementById("nombre");
const correoField = document.getElementById("correo");
const conferenciaField = document.getElementById("conferencia");

document.addEventListener("DOMContentLoaded", function () {
  let objectArray = JSON.parse(localStorage.getItem("formObject")) || [];
  objectArray.forEach(function (arrayObject) {
    insertarInfo(arrayObject);
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validarForm()) {
    return;
  }

  let formData = new FormData(form);
  let formObject = formDataObject(formData);
  guardarInfo(formObject);
  insertarInfo(formObject);

  form.reset();
});

nombreField.addEventListener("blur", (e) => validarTexto("Este campo es obligatorio.", e));
correoField.addEventListener("blur", validarCorreo);

function validarForm() {
  let valido = true;

  if (!validarTexto("Este campo es obligatorio.", { target: nombreField })) {
    valido = false;
  }
  if (!validarCorreo({ target: correoField })) {
    valido = false;
  }
  if (!validarConferencias()) {
    valido = false;
  }

  return valido;
}

function validarTexto(mensaje, e) {
  const mainField = e.target;
  const mainValue = e.target.value;
  if (mainValue.trim().length === 0) {
    mainField.nextElementSibling.classList.add("error");
    mainField.nextElementSibling.innerText = mensaje;
    return false;
  } else {
    mainField.nextElementSibling.classList.remove("error");
    mainField.nextElementSibling.innerText = "";
    return true;
  }
}

function validarCorreo(e) {
  const mainField = e.target;
  const mainValue = e.target.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (mainValue.trim().length === 0) {
    mainField.nextElementSibling.classList.add("error");
    mainField.nextElementSibling.innerText = "El campo correo es obligatorio.";
    return false;
  } else if (!regex.test(mainValue)) {
    mainField.nextElementSibling.classList.add("error");
    mainField.nextElementSibling.innerText = "Ingrese un correo válido.";
    return false;
  } else {
    mainField.nextElementSibling.classList.remove("error");
    mainField.nextElementSibling.innerText = "";
    return true;
  }
}

function validarConferencias() {
  const checkboxes = conferenciaField.querySelectorAll("input[type='checkbox']");
  const algunoSeleccionado = Array.from(checkboxes).some((checkbox) => checkbox.checked);

  const errorSpan = document.getElementById("incompleto");
  if (!algunoSeleccionado) {
    errorSpan.classList.add("error");
    errorSpan.innerText = "Debe seleccionar al menos una conferencia.";
    return false;
  } else {
    errorSpan.classList.remove("error");
    errorSpan.innerText = "";
    return true;
  }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    if (!validarForm()) {
      alert("No se pudo completar el registro de su asistencia. Por favor verifica tu formulario.");
      return;
    }
  
    alert("Tu registro ha sido completado exitosamente! Nos vemos en el evento.");
  
    form.reset();
  });
