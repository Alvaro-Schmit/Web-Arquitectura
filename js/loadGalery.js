
let loadGalery = (id,object)=>{
object.forEach(value => {
   
  document.getElementById(id).innerHTML += `<li><a href="${value.href}"><img src="${value.picture}"alt=""></a></li>`
  
})};  







