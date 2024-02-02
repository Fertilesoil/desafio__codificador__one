import { text } from "../utils/frequent";
import { templateAtivo } from "./activeTemplate";
import { encriptarLive } from "./cript";
import { templateVazio } from "./emptyTemplate";


templateVazio()
export function revelaTextoLive() {
 text.oninput = function (e) {
  let resultado = text.value

  if (resultado) {
   encriptarLive(resultado)
   templateAtivo(resultado)
  } else {
   templateVazio()
  }
 }
}