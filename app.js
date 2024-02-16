﻿import { templateVazio } from "./src/modulos/emptyTemplate"
import { copia } from "./src/modulos/copy"
import { assegurarBordas, restauraPadrao } from "./src/modulos/ensureDefault"
import { botaoCripto, botaoDecripto } from "./src/modulos/cript"
import { corretor } from "./src/modulos/watcher"
import { hideMenu } from "./src/modulos/menu"

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

// text.ontouchstart = (e) => {
//  e.preventDefault()
// }

// text.ontouchend = (e) => {
//  corretor();
//  e.preventDefault();
// };