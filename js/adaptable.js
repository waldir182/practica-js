const d=document

export default function adaptable() {
  function responsive() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      /* La pantalla tiene al menos 768 píxeles de ancho */
    } else {
      //alert("Pantalla ordenador")
      /* La pantalla tiene menos de 768 píxeles de ancho */
      //alert("Pantalla movil")
    }
  }
  window.addEventListener("resize",e=>{
    responsive()
  })
  responsive()
}