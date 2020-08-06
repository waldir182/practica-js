
export default function menu(btnMenu,menu){
  const d=document;
  const $btnMenu=d.getElementById(btnMenu);
  const $menu=d.getElementById(menu);
  
  $btnMenu.addEventListener("click",()=>{
    $menu.classList.toggle("active");
    $btnMenu.classList.toggle("active")
  })
  
  $menu.addEventListener("click",()=>{
    $menu.classList.remove("active")
    $btnMenu.classList.remove("active")
  })
  
}