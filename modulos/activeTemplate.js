export function templateAtivo(texto) {
 const template = document.querySelector('.section__template')
 const resultado = document.querySelector('.section__resultado')
 const link = document.querySelector('#link-text')

 link.textContent = `${texto}`
 template.style.display = 'none'
 resultado.style.display = 'flex'
 return resultado
}

const text = document.getElementById('text__area__conteudo')
export function limpaTextArea() {
 let limpo = text.value = ''
 return limpo
}