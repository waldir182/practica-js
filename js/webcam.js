const d=document
const w=window
const n=navigator

export default function webCam(id) {
  
  let $video=d.getElementById(id)
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices.getUserMedia({video:true,audio:false})
    .then((stream)=>{
      $video.srcObject=stream;
      $video.play();
    })
    .catch((err)=>{
      let re=d.createElement('p')
      re.innerHTML=`Sucedio el siguente error: <mark>${err}</mark>`
      $video.insertAdjacentElement('beforebegin',re)
    })
  }
}