
let loadGaleryIndex = (id,object)=>{
    object.forEach(value => {
       
      document.getElementById(id).innerHTML += `<div id=${value.id}><a href="${value.href}"><img loading="lazy" class="${value.class}" src="${value.picture}" alt=""></a>
      <h3>Casa modelo el Jose Ignacio</h3>
  </div>`
      
    })};  
console.log(indexData);
 
    loadGaleryIndex("galeriaIndex",indexData)
