import { resultado, template, templateLive } from '../utils/frequent'

export function templateVazio() {
 resultado.style.display = 'none'
 template.style.display = 'flex'
 return template
}

export function templateVazioLive() {
 resultado.style.display = 'none'
 templateLive.style.display = 'flex'
 return templateLive
}