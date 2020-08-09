const d=document
const w=window

export default function detectarRed() {
  function estado() {
    let es=w.navigator.onLine
    let div=d.createElement('div')
    if (es) {
      div.textContent="Conexion restablecida"
      div.classList.add('online')
      d.body.insertAdjacentElement('afterbegin',div)
      setTimeout(function() {
        div.remove()
      }, 4000);
    }else{
      div.textContent="Conexion perdida"
      div.classList.add('offline')
      d.body.insertAdjacentElement('afterbegin',div)
      setTimeout(function() {
        div.remove()
      }, 4000);
    }
  }
  
  w.addEventListener('online',()=>estado())
  w.addEventListener('offline',()=>{
    estado()
  })
}