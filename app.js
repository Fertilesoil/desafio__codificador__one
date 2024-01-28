const text = document.getElementById('text__area__conteudo')
const output = document.querySelector('.lateral')
const copiar = document.querySelector('.copiar')
const lateral = document.querySelector('.render__aside')

text.addEventListener('input', () => {
  let enxergaTexto = text.value
  if (enxergaTexto === '') {
    templateVazio()
  }
})

function limpaTextArea() {
  let limpo = text.value = ''
  return limpo
}

function templateVazio() {
  const template = output.innerHTML = `
  <aside class="lateral render" aria-label="aside__direito">
  <img src="assets/waiting.jpg" id="wait" alt="">
  <h3>Nenhuma mensagem encontrada</h3>
  <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
  </aside>
  `
  return template
}

function templateAtivo(texto) {
  const template = output.innerHTML = `
  <aside class="render__aside">
  <div id="criptografia">
  <a id="link-text">${texto}</a>
  </div>
  <button class="copiar">
  Copiar
  </button>
  </aside>
  `
  return template
}

const botaoCripto = document.querySelector('#btn__cripto')
botaoCripto.addEventListener('click', () => {
  let texto = document.querySelector('#text__area__conteudo')
  let recebidos = texto.value

  encriptar(recebidos)
  limpaTextArea()
})

const botaoDecripto = document.querySelector('#btn__decripto')
botaoDecripto.addEventListener('click', () => {
  let texto = document.querySelector('#text__area__conteudo')
  let recebidos = texto.value

  decriptar(recebidos)
  limpaTextArea()
})

function encriptar(texto) {
  if (!texto) return templateVazio()

  let cripto = texto
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/e/g, 'enter')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  templateAtivo(cripto)
}

function decriptar(texto) {
  if (!texto) return templateVazio()

  let decripto = texto
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

  templateAtivo(decripto)
}