

let loadGalery = (id,object)=>{
object.forEach(value => {
   
  id.innerHTML += `<li><a href="${value.href}"><img src="${value.picture}"alt=""></a></li>`
  
})};  







