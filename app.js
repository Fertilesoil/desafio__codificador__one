const text = document.getElementById('text__area__conteudo')
const output = document.querySelector('.lateral')

let ac = 'ai'
let ec = 'enter'
let ic = 'imes'
let oc = 'ober'
let uc = 'ufat'


function revelaTexto() {
  const text = document.getElementById('text__area__conteudo')
  const output = document.querySelector('.lateral')
  const p = document.querySelector('.aviso')

  text.addEventListener('keyup', () => {
    let recebidos = text.value

    if (recebidos.includes('A')) {
      p.innerHTML = `
   <span class="aviso__trigger">Apenas letras minúsculas e sem acento</span>
   `
    }

    let a = (/a/g)
    let e = (/e/g)
    let i = (/i/g)
    let o = (/o/g)
    let u = (/u/g)

    let cripto = recebidos.replace(a, ac).replace(e, ec).replace(i, ic).replace(o, oc).replace(u, uc)
    console.log(cripto);
    if (recebidos !== '') {
      output.innerHTML = `
   <aside class="render__aside">
  <textarea readonly id="criptografia">
  ${cripto}
  </textarea>

  <button class="copiar">
   Copiar
  </button>
  </aside>
  `
    } else {
      output.innerHTML = `
   <aside class="lateral render" aria-label="aside__direito">
   <img src="assets/waiting.jpg" id="wait" alt="">
   <h3>Nenhuma mensagem encontrada</h3>
   <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
 </aside>
   `
    }
  })
}