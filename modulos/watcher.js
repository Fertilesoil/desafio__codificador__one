export function corretor() {
 const text = document.getElementById('text__area__conteudo');

 text.addEventListener('keypress', (e) => {

  if (checar(e)) {
   e.preventDefault()
  }
 })
}

function checar(e) {
 const caracter = String.fromCharCode(e.keyCode)

  const regex = /^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']+$/

 if (caracter.match(regex)) {
  textAreaErro()
  return true
 }
}

function textAreaErro() {
 const text = document.getElementById('text__area__conteudo');
 const p = document.querySelector('.aviso')

 p.innerHTML = `
  <span class="aviso__erro">Apenas letras minúsculas e sem acento</span>
  `
 text.classList.add('text__area__erro')
 setTimeout(() => {
  text.classList.remove('text__area__erro')
  p.innerHTML = `
  <p class"aviso">Apenas letras minúsculas e sem acento</p>
  `
 }, 1300)
}