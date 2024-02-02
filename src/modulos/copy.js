import { copiar, link } from "../utils/frequent"

export function copia() {
  copiar.addEventListener('click', () => {
    let texto = link.textContent
    navigator.clipboard.writeText(texto).then(() => {
    })
  })
}