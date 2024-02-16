import { templateVazio } from "./src/modulos/emptyTemplate"
import { copia } from "./src/modulos/copy"
import { assegurarBordas, restauraPadrao } from "./src/modulos/ensureDefault"
import { botaoCripto, botaoDecripto } from "./src/modulos/cript"
import { checarTexto, corretor } from "./src/modulos/watcher"
import { hideMenu } from "./src/modulos/menu"
import { text } from "./src/utils/frequent"

assegurarBordas()
restauraPadrao()
templateVazio()
copia()
botaoCripto()
botaoDecripto()
corretor()
hideMenu()

// text.addEventListener('onchange', () => { 
//  let tutu = text.value.split('')
//  console.log(tutu);
// })

