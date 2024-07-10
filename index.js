function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto   .replace(/a/gi, "pff")      .replace(/e/gi, "kkdvk")      .replace(/i/gi, "popo")       .replace(/o/gi, "okki")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;      tituloMensaje.textContent = "Texto encriptado con éxito";      parrafo.textContent = "";
      muñeco.src = "./Imagenes/encriptado.png";    } else {
      muñeco.src = "./Imagenes/Muñeco.png";    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto para encriptar o desencriptar";     swal("ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/pff/gi, "a")   .replace(/kkdvk/gi, "e")   .replace(/popo/gi, "i")   .replace(/okki/gi, "o")   .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado";
        parrafo.textContent = "";
        muñeco.src = "./Imagenes/desencriptando.png";
      } else {        muñeco.src = "./Imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal( "ingresar un texto de nuevo", "warning");
      }
  }