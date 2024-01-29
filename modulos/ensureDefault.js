export function restauraPadrao() {
  const text = document.getElementById('text__area__conteudo')
  text.addEventListener('input', () => {
    let enxergaTexto = text.value
    if (enxergaTexto === '') {
      templateVazio()
    }
  })
}