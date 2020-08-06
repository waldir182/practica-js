const d=document;

export function tiempo(btnstar,btnstop,re){
  let inter;
  d.addEventListener("click",(e)=>{
    const resultado=d.querySelector(re);
    if(e.target.matches(btnstar)){
      inter=setInterval(function(){
        let b=e.target
        b.disabled=true;
        let t=new Date();
        let hora=t.getHours();
        let minuto=t.getMinutes();
        let segundos=t.getSeconds();
        
        //Resetear valores
        hora<10?hora=`0${hora}`:""
        minuto<10?minuto=`0${minuto}`:""
        segundos<10?segundos=`0${segundos}`:""
        
        resultado.innerHTML=`<h3 class="bg">${hora}:${minuto}:${segundos}</h3>`;
      
      },1000)
    }
    if (e.target.matches(btnstop)) {
      clearInterval(inter)
      d.querySelector(btnstar).disabled=false
    }
    
  })
  
}
export function alarma(sound,btnPlay,btnStop){
  let $alarm;
  d.addEventListener("click",(e)=>{
    if (e.target.matches(btnPlay)) {
      e.target.disabled=true
      $alarm=d.createElement("audio")
      $alarm.src=sound;
      $alarm.play();
    }
    if (e.target.matches(btnStop)) {
      $alarm.pause()
      d.querySelector(btnPlay).disabled=false
    }
    
  })
}