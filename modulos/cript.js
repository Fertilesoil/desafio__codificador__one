import { limpaTextArea, templateAtivo } from './activeTemplate'
import { templateVazio } from './emptyTemplate'

export function encriptar(texto) {
  if (!texto) return templateVazio()

  let cripto = texto
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/e/g, 'enter')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  templateAtivo(cripto)
  limpaTextArea()
}

export function decriptar(texto) {
  if (!texto) return templateVazio()

  let decripto = texto
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

  templateAtivo(decripto)
  limpaTextArea()
}

export function botaoCripto() {
  const botaoCripto = document.querySelector('#btn__cripto')
  botaoCripto.addEventListener('click', () => {
    let texto = document.querySelector('#text__area__conteudo')
    let recebidos = texto.value

    encriptar(recebidos)
  })
}

export function botaoDecripto() {
  const botaoDecripto = document.querySelector('#btn__decripto')
  botaoDecripto.addEventListener('click', () => {
    let texto = document.querySelector('#text__area__conteudo')
    let recebidos = texto.value

    decriptar(recebidos)
  })
}