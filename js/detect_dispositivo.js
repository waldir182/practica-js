const d=document

export default function verDispositivo(id) {
  const div=d.getElementById(id)
  div.innerHTML=window.navigator.userAgent
  
}