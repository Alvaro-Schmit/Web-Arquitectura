
let loadGalery = (id,object)=>{
object.forEach(value => {
   
  document.getElementById(id).innerHTML += `<img src="${value.picture}"alt="">`
  
})};  







