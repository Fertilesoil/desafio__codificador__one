import { copiar, link, text } from "../utils/frequent"

export function copia() {
  copiar.addEventListener('click', () => {
    let texto = link.textContent
    navigator.clipboard.writeText(texto).then(() => {
    })
  })
}

export function copiaLive() {
  copiar.textContent = 'Decriptar'
  copiar.addEventListener('click', () => {
    let textoCripto = link.textContent
    let textoDecripto = text.value
    link.textContent = textoDecripto
    text.value = textoCripto
    navigator.clipboard.writeText(textoCripto).then(() => {
    })
  })
}