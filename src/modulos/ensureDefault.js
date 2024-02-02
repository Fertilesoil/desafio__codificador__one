import { templateVazio } from "./emptyTemplate"
import { text } from "../utils/frequent"

export function restauraPadrao() {
  text.addEventListener('input', () => {
    let enxergaTexto = text.value
    if (enxergaTexto === '') {
      templateVazio()
    }
  })
}