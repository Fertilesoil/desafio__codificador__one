import { logo, menu } from "../utils/frequent";

export function hideMenu() {
 logo.onclick = () => {
  console.log('clicou');
  logo.classList.toggle('click')
  menu.classList.toggle('hide')
 }

 window.onload = () => { 
  logo.classList.toggle('click')
  menu.classList.toggle('hide')
 }
}


