// function revelaTexto() {
//   const text = document.getElementById('text__area__conteudo')
//   const output = document.querySelector('.lateral')
//   const p = document.querySelector('.aviso')

//   text.addEventListener('keyup', () => {
//     let recebidos = text.value
//     // let regexProibido = (/a/g)


//     if (recebidos.includes('A')) {
//       p.innerHTML = `
//   <span class="aviso__trigger">Apenas letras minúsculas e sem acento</span>
//   `
//     }

//     let cripto = recebidos
//       .replace(a, ac)
//       .replace(e, ec)
//       .replace(i, ic)
//       .replace(o, oc)
//       .replace(u, uc)
//     console.log(cripto);

//     if (recebidos !== '') {
//       output.innerHTML = `
//   <aside class="render__aside">
//     <div id="criptografia">
//     <a id="link-text">${cripto}</a>
//     </div>
//   <button class="copiar">
//   Copiar
//   </button>
//   </aside>
//   `
//     } else {
//       output.innerHTML = `
//   <aside class="lateral render" aria-label="aside__direito">
//   <img src="assets/waiting.jpg" id="wait" alt="">
//   <h3>Nenhuma mensagem encontrada</h3>
//   <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
//   </aside>
//   `
//     }
//   })
// }