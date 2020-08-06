//script principal
import menu from "./menu.js";
import {tiempo,alarma} from "./timer.js";
import teclado from "./eventos_teclado.js";
import cuenta from "./countdown.js";
import scroll from "./scroll_top.js";
import tema from "./theme.js";
import adaptable from "./adaptable.js";


const d=document;

d.addEventListener("DOMContentLoaded",()=>{
  menu("btnMenu","menu");
  tiempo("#star-reloj","#stop-reloj","#reloj");
  alarma("./files/alarm.mp3","#star-alarm","#stop-alarm");
  teclado("#box","#circle")
  cuenta("#countdown","Dec 25,2020 00:00:00")
  scroll("btnScroll")
  tema("btnTheme")
  adaptable()
})
