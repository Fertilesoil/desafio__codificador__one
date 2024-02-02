import { alternador, tag, body, script } from "../utils/frequent"

export function alternarModoLive() {
 alternador.addEventListener('click', () => {


  tag.setAttribute('type', 'module')
  tag.setAttribute('src', 'live.js')
  tag.setAttribute('class', 'live')
  body.appendChild(tag)
  console.log(script);
 })
}

export function alternarModoSincrono() {
 alternador.addEventListener('click', () => {
  location.reload()
 })
}