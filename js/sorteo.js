const d=document

export default function sorteo(id) {
  // body...
  let box=d.getElementById(id)
  let lista=["Java","PHP","Javascript","Ruby","Rust","Python"]
  lista.forEach((par)=>{
    let li=d.createElement("li")
    li.textContent=par
    //box.innerHTML+=li
    box.insertAdjacentElement("beforebegin",li)
  })
  let btn=d.createElement("button")
  btn.setAttribute('id','starSorteo')
  btn.textContent="Inciar Sorteo"
  box.insertAdjacentElement("afterbegin",btn)
  d.addEventListener('click',(e)=>{
    if (e.target.matches('#starSorteo')) {
      let ran=Math.round(Math.random()*lista.length-1)
      
      alert(`El ganador es: ${lista[ran]} 💥`)
    }
  })
}