function promesa(t) {
  return new Promise((exito)=>{
    setTimeout(function() {
      exito()
      console.log(100)
    }, t);
  })
}

async function correr() {
  await promesa(100)
  await promesa(1000)
  await promesa(4000)
  await promesa(1000)
}
//correr()
//console.log(promesa())
console.log(window.navigator)