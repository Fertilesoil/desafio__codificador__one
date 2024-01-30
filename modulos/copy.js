export function copia() {
  const copiar = document.querySelector('.copiar')
  const link = document.querySelector('#link-text')

  copiar.addEventListener('click', () => {
    let texto = link.textContent
    navigator.clipboard.writeText(texto).then(() => {
    })
  })
}