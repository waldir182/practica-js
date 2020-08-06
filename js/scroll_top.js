const d=document,
      w=window
export default function scroll(btn) {
 let varScroll=d.querySelector(".contenedor")
  varScroll.addEventListener("scroll",e=>{
    let altura=varScroll.scrollTop;
    let btnScroll=d.getElementById(btn)
    //alert(altura)
    if (altura>400) {
      btnScroll.classList.remove("hidden")
    }else{
      btnScroll.classList.add("hidden")
    }
  })
  
  d.addEventListener("click",e=>{
    if (e.target.matches(`#${btn} *`)) {
      varScroll.scrollTo({
        behavior:"smooth",
        top:0
      })
    }
    
    
  })
}