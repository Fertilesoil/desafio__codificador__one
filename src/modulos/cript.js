import { limpaTextArea, templateAtivo, templateAtivoLive } from './activeTemplate'
import { templateVazio, templateVazioLive } from './emptyTemplate'
import { text, botaoDecriptoEscutador, botaoCriptoEscutador } from '../utils/frequent'
import { checarTexto } from './watcher'

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

function encriptarLive(texto) {
  if (!texto) return templateVazioLive()

  let cripto = texto
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/e/g, 'enter')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  templateAtivoLive(cripto)
}

export function textoLive() {
  text.addEventListener('keyup', () => {
    let recebidos = text.value

    encriptarLive(recebidos)
  })
}

export function textoLiveDecripto() {
  text.addEventListener('keyup', () => {
    let recebidos = text.value

    decriptarLive(recebidos)
  })
}

export function botaoCripto() {
  botaoCriptoEscutador.addEventListener('click', () => {
    let texto = document.querySelector('#text__area__conteudo')
    let recebidos = texto.value


    encriptar(recebidos)
  })
}

export function botaoDecripto() {
  botaoDecriptoEscutador.addEventListener('click', () => {
    let texto = document.querySelector('#text__area__conteudo')
    let recebidos = texto.value

    decriptar(recebidos)
  })
}

export function bloquearBotaoLive() {
  botaoCriptoEscutador.setAttribute('disabled', true)
  botaoCriptoEscutador.style.pointerEvents = 'none'
  botaoCriptoEscutador.style.backgroundColor = 'grey'
  botaoCriptoEscutador.style.color = '#f7f7f7'

  botaoDecriptoEscutador.setAttribute('disabled', true)
  botaoDecriptoEscutador.style.pointerEvents = 'none'
  botaoDecriptoEscutador.style.backgroundColor = 'grey'
  botaoDecriptoEscutador.style.color = '#f7f7f7'
}