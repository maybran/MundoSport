

const productos = JSON.parse(localStorage.getItem("productos")) || []



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