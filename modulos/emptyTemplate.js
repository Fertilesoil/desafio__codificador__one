export function templateVazio() {
 const template = document.querySelector('.section__template')
 const resultado = document.querySelector('.section__resultado')

 resultado.style.display = 'none'
 template.style.display = 'flex'
 return template
}