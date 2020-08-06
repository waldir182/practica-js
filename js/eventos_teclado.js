const d=document
let x=0,
    y=0
let timer;
      
export default function teclado(box,circle) {
  
  d.addEventListener("touchstart",(e)=>{
    clearInterval(timer);
    timer=setInterval(function(){
      
      let $box=d.querySelector(box),
          $circle=d.querySelector(circle)
      let lc=$circle.getBoundingClientRect(),
          lb=$box.getBoundingClientRect();
  
      switch (true) {
        case e.target.matches("#top"):
          lc.top > lb.top+5?y--:''
          break;
        case e.target.matches("#bottom"):
          lb.bottom > lc.bottom+5?y++:''
          break;
        case e.target.matches("#left"):
          lc.left > lb.left+5?x--:''
          break;
        case e.target.matches("#right"):
          lb.right > lc.right+5?x++:''
          break;
        default:
          // code
      }
      $circle.style.transform=`translate(${x*1}px,${y*1}px)`
    },10)
   d.addEventListener('touchend', function(e){
        clearInterval(timer);
    });
  })
  
  function paraClick() {
    const buttonss = document.querySelectorAll(".bt");
    buttonss.forEach((button) => {
      button.addEventListener("click",function(e){
        let xx = e.clientX - e.target.offsetLeft;
        let yy = 25;
        //alert(e.clientX)
        let ripple = d.createElement("span");
        ripple.style.left = `${xx}px`;
        ripple.style.top = `${yy}px`;
        this.appendChild(ripple);
        setTimeout(function(){
          ripple.remove();
        }, 600); // 1second = 1000ms
      })
      /*
      button.addEventListener("touchstart",function(e){
          let ripple= d.createElement("i");
          this.appendChild(ripple);
      })
      
      button.addEventListener("touchend",function(e){
        this.querySelector("i").remove()
      })
      */
    });
  }
  //paraClick()
  
}