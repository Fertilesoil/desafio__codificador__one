import { templateVazio, templateVazioLive } from "./emptyTemplate"
import { text } from "../utils/frequent"

export function restauraPadrao() {
  text.addEventListener('input', () => {
    let enxergaTexto = text.value
    if (enxergaTexto === '') {
      templateVazio()
    }
  })
}

export function restauraPadraoLive() {
  text.addEventListener('input', () => {
    let enxergaTexto = text.value
    if (enxergaTexto === '') {
      templateVazioLive()
    }
  })
}
