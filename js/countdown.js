const d=document;

export default function cuenta(campo,fecha) {
  const $campo=d.querySelector(campo);
  let interval;
  interval=setInterval(()=>{
    let $fecha=new Date(fecha)
    let actual = new Date()
    
    let total=$fecha.getTime()-actual.getTime()
    $campo.innerHTML=actual.getTime()+"<br>"+$fecha.getTime()
    let dias=Math.floor(total/(1000*60*60*24)),
    horas =("0"+Math.floor(total % (1000*60*60*24)/(1000*60*60))).slice(-2),
    minutos= ("0"+Math.floor(total % (1000*60*60)/(1000*60))).slice(-2),
    segundos= ("0"+Math.floor(total % (1000*60)/1000)).slice(-2)
    
    $campo.innerHTML=`Faltan ${dias} dias ${horas} horas ${minutos} minutos y ${segundos} segundos`
     
      
    if (total<=0) {
      clearInterval(interval)
      $campo.innerHTML="!Feliz Bavidad¡"
    }
    
    colorear()
  },1000)
  
  function colorear() {
    let c=d.querySelector("#countdown").innerHTML
    c = c.replace(/\b(\d+)/g,'<span class="numberColor">$1</span>');
    d.querySelector(campo).innerHTML=c
  }
  
  
}