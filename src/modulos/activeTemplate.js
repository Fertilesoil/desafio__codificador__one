import { template, link, resultado, text, templateLive } from "../utils/frequent"

export function templateAtivo(texto) {
 link.textContent = `${texto}`
 template.style.display = 'none'
 resultado.style.display = 'flex'
 return resultado
}

export function templateAtivoLive(texto) {
 link.textContent = `${texto}`
 templateLive.style.display = 'none'
 resultado.style.display = 'flex'
 return resultado
}

export function limpaTextArea() {
 let limpo = text.value = ''
 return limpo
}