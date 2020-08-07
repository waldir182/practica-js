const d=document

export default function adaptable(youtube,maps,url1,url2) {
  function responsive() {
    const $yt=d.getElementById(youtube)
    const $mp=d.getElementById(maps)
    if (window.matchMedia("(min-width: 768px)").matches) {
      /* La pantalla tiene mas 768 píxeles de ancho */
      $yt.innerHTML= `<iframe width="560" height="315" src="https://www.youtube.com/embed/iR-MpOH_GmI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      $mp.innerHTML= `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8065041.382478958!2d-75.0195144!3d-9.2435384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2zUGVyw7o!5e0!3m2!1ses-419!2sin!4v1596767991619!5m2!1ses-419!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    } else {
      /* La pantalla tiene menos de 768 píxeles de ancho */
      $yt.innerHTML= `<a href="${url1}">video</a>`
      $mp.innerHTML= `<a href="${url2}">mapa</a>`
    }
  }
  window.addEventListener("resize",e=>{
    responsive()
  })
  responsive()
}