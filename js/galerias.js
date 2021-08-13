
let loadGalery = (id,object)=>{
object.forEach(value => {
  console.log(value.picture);  
  id.innerHTML+= `<li><a href="${value.href}"><img src="${value.picture}"alt=""></a></li>`
  
})};  
let idGaleryGonzaloCasa =document.getElementById("idGaleryGonzaloCasa")
loadGalery(idGaleryGonzaloCasa,gonzaloCasaData)