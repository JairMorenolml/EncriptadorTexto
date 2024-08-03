const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoOriginal = textArea.value.trim();
  if (!textoOriginal) {
    mensaje.value = "\n\nNingún mensaje fue encontrado.\n\nIngresa el texto que desees encriptar.";
    mensaje.style.textAlign = "center";
    return;
  }

  const textoEncriptado = encriptar(textoOriginal);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  mensaje.style.textAlign = "left";
}

function encriptar(stringEncriptado) {
  const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (const [original, reemplazo] of matrizCodigo) {
    stringEncriptado = stringEncriptado.split(original).join(reemplazo);
  }
  return stringEncriptado;
}

function btnDesencriptar() {
  const textoOriginal = textArea.value.trim();
  if (!textoOriginal) {
    mensaje.value = "\n\nNingún mensaje fue encontrado.\n\nIngresa el texto que desees desencriptar.";
    mensaje.style.textAlign = "center";
    return;
  }

  const textoDesencriptado = desencriptar(textoOriginal);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  mensaje.style.textAlign = "left";
}

function desencriptar(stringDesencriptado) {
  const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (const [original, reemplazo] of matrizCodigo) {
    stringDesencriptado = stringDesencriptado.split(reemplazo).join(original);
  }
  return stringDesencriptado;
}

async function copiar() {
  try {
    await navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "¡Texto Copiado!";
    mensaje.style.backgroundImage = "none";
    mensaje.style.textAlign = "center";
  } catch (error) {
    console.error("Error al copiar el texto: ", error);
    mensaje.value = "Error al copiar el texto.";
    mensaje.style.textAlign = "center";
  }
}