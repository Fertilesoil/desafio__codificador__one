import { templateAtivo } from "./activeTemplate";
import { encriptarLive } from "./cript";
import { templateVazio } from "./emptyTemplate";

templateVazio()
export function revelaTextoLive() {
 const text = document.getElementById('text__area__conteudo');


 text.oninput = function (e) {
  let resultado = text.value

  if (resultado) {
   encriptarLive(resultado)
   templateAtivo(resultado)
   // lateral.innerHTML = resultado
  } else {
   templateVazio()
  }
 }
}