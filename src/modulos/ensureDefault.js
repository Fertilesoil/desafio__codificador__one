import { templateVazio, templateVazioLive } from "./emptyTemplate"
import { text } from "../utils/frequent"

export function restauraPadrao() {
  text.addEventListener('input', () => {
    let enxergaTexto = text.value
    if (enxergaTexto === '') {
      text.classList.add('desativado')
      templateVazio()
    } else {
      text.classList.remove('desativado')
    }
  })
}

export function assegurarBordas() {
  text.classList.add('desativado')
}

export function restauraPadraoLive() {
  text.addEventListener('input', () => {
    let enxergaTexto = text.value
    if (enxergaTexto === '') {
      text.classList.add('desativado')
      templateVazioLive()
    } else {
      text.classList.remove('desativado')
    }
  })
}
