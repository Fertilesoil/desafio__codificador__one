const alternador = document.querySelector('.btn__troca')

export function alternarModoLive() {
 alternador.addEventListener('click', () => {
  const tag = document.createElement('script')
  const body = document.querySelector('body')
  const script = document.querySelectorAll('script')

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