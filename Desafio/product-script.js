document.addEventListener("DOMContentLoaded", function () {
    const productName = document.getElementById("productName");
    const productDescription = document.getElementById("productDescription");
  
    
    //Recupera el valor almacenado en el localStorage con la clave "ProdID"
    let id = localStorage.getItem("ProdID");
    let nombre = PRODUCTS[id -1].name;
    let descripción = PRODUCTS[id -1].description;
    productName.textContent = nombre;
    productDescription.textContent = descripción;
    //Busca ese producto en la matriz de productos y muestra su nombre y descripción en la página de detalles del producto.
});


 