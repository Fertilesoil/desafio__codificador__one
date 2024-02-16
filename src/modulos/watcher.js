﻿import { text, p } from "../utils/frequent"
import { templateVazio } from "./emptyTemplate"

export function corretor() {
 text.addEventListener('keypress', (e) => {

  if (checar(e)) {
   e.preventDefault()
  }
 })

 text.oninput = () => {
  
  if (checar(e)) {
   e.preventDefault()
  }
 }
}

function checar(e) {
 const caracter = String.fromCharCode(e.keyCode)

 const regex = /^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ~´`^¨']+$/

 if (caracter.match(regex)) {
  textAreaErro()
  return true
 }
}

export function checarTexto(texto, e) {
 const regex = /^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ~´`^¨']+$/
 const conferido = texto.split('').some( char => char.match(regex))

 if (conferido === true) {
  e.preventDefault();
  textAreaErro();
  templateVazio();
 }
}

export function textAreaErro() {
 p.innerHTML = `
  <p class="aviso__erro">Apenas letras minúsculas e sem acento</p>
  `
 text.classList.add('text__area__erro')
 setTimeout(() => {
  text.classList.remove('text__area__erro')
  p.innerHTML = `
  <p class"aviso">Apenas letras minúsculas e sem acento</p>
  `
 }, 1300)
}