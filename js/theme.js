
const d=document

export default function tema(btn) {
  let ele=d.querySelectorAll("[data-dark]")
  function cambiar(t) {
    if (t===1) {
      ele.forEach(el=>{
        el.classList.add("dark")
      })
      localStorage.setItem("theme",null)
    }else{
      ele.forEach(el=>{
        el.classList.remove("dark")
      })
      localStorage.removeItem("theme")
    }
  }
  function ver(es) {
    let existe=localStorage.getItem("theme")
    let emogi=d.getElementById(btn)
    if(existe){
      ele.forEach(el=>{
        el.classList.add("dark")
      })
      emogi.innerHTML="☀️"
    }else{
      emogi.innerHTML="️🌚"
    }
    
  }
  ver()
  d.addEventListener("click",e=>{
    if (e.target.matches(`#${btn}`)) {
      let emogi=d.getElementById(btn)
      if(emogi.innerHTML=="️🌚"){
        emogi.innerHTML="☀️"
        cambiar(1)
      }else{
        emogi.innerHTML="️🌚"
        cambiar(2)
      }
    }
  })
}