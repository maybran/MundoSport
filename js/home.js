

let productosIni = [
    {
      id: 'e69d6c2c-301e-4011-bc5c-6b3cfafd4fdd',
      descripcion: "Remera termica UFC primera liena",
      titulo: "Remera Adidas",
      precio: 500,
      dateCreate: "2020-11-10",
      imagen: "/assets/gallery/producto-2.jpg",
      categoria: "Remera",
    },
    {
      id: '0f84e0b2-31e5-4ae0-b7cc-55cb79564a6f',
      descripcion: "Babucha frizada de lycra",
      titulo: "Babucha adidas",
      precio: 499,
      dateCreate: "2020-11-12",
      imagen: "/assets/gallery/producto-3.jpg",
      categoria: "Pantalon",
    },
    {
      id: 'cde27b0a-93f1-4424-bedf-19ae43fff54d',
      descripcion: "Remera algodon Under Armour Naranja",
      titulo: "Remera Under",
      precio: 399,
      dateCreate: "2016-08-20",
      imagen: "/assets/gallery/producto-4.jpg",
      categoria: "Remera",
    },
    {
      id: '9a8dc833-ee81-4bbc-81da-67f6228b1f8c',
      descripcion: "Remera algodon Under Armour Gris",
      titulo: "Remera Under",
      precio: 399,
      dateCreate: "2017-03-03",
      imagen: "/assets/gallery/producto-5.jpg",
      categoria: "Remera",
    },
    {
      id: 'fdb48d6c-6c65-11ee-b962-0242ac120002',
      descripcion: "Short Algodon Adidas Prinera Linea Color Gris",
      titulo: "Short Adidas",
      precio: 399,
      dateCreate: "2017-03-03",
      imagen: "/assets/gallery/producto-6.jpg",
      categoria: "Short",
    },
    {
      id: 'f56d8ce4-6c65-11ee-b962-0242ac120002',
      descripcion: "Short Algodon Adidas Prinera Linea Color Negro",
      titulo: "Short - Adidas",
      precio: 399,
      dateCreate: "2017-03-03",
      imagen: "/assets/gallery/producto-7.jpg",
      categoria: "Short",
    },
    {
      id: 'eec00b74-6c65-11ee-b962-0242ac120002',
      descripcion: "Short Algodon Adidas Prinera Linea Naranja Mujer",
      titulo: "Short - Adidas",
      precio: 399,
      dateCreate: "2017-03-03",
      imagen: "/assets/gallery/producto-8.jpg",
      categoria: "Short",
    },
    {
      id: 'bd17fd0c-6c65-11ee-b962-0242ac120002',
      descripcion: "Calza Adidas 100% algodon Negra Mujer",
      titulo: "Calza - Adidas",
      precio: 399,
      dateCreate: "2017-03-03",
      imagen: "/assets/gallery/producto-9.jpg",
      categoria: "Calza",
    }
]
  
const productos = JSON.parse(localStorage.getItem("productos")) || productosIni
console.log(productos)



const cardContainer = document.getElementById("card-container")

productos.forEach((prod) => {
    cardContainer.innerHTML += `
        <div class="card-product">
            <div class="card-header">
                <img src="${prod.imagen}" alt="${prod.titulo}">
                <div class="card-img-info">
                    <h2>${prod.titulo}</h2>
                </div>
            </div>

            <div class="card-prices">
                <div class="card-date">${prod.dateCreate}</div>
                <div class="card-price">$${prod.precio}</div>
            </div>

            <div class="card-description">
                ${prod.descripcion}
            </div>

            <div class="card-footer">
                <a class="card-more-info" href="/pages/productos/descripcion.html?id=${prod.id}">Ver mas</a>
                <button class="card-buy">Comprar</button>
            </div>
        </div>
    `
})