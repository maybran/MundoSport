
let productosIniciales = [
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

let productos = JSON.parse( localStorage.getItem("productos") ) || productosIniciales


if( JSON.parse( localStorage.getItem("productos") ) === null ) {
  localStorage.setItem("productos", JSON.stringify(productos))
}


let idEditar;

const tableBodyHTML = document.querySelector("#table-body")
const inputSearchHTML = document.getElementById("buscar")

paintProduct(productos)

const btn = document.querySelector('button[type="submit"]')
const formProductHTML = document.getElementById("form-producto")
  
  // ! Funcion para escuchar lo que se agrega
  formProductHTML.addEventListener('submit', (evt) => {
  
    evt.preventDefault()
  
    const elm = formProductHTML.elements;
  
    const id = idEditar === undefined ? crypto.randomUUID() : idEditar
    
    const nuevoProducto = {
      id: id,
      titulo: elm.titulo.value,
      precio: elm.precio.valueAsNumber,
      categoria: elm.categoria.value,
      imagen: elm.imagen.value,
      descripcion: elm.descripcion.value,
      dateCreate: getDate()
    }
    
    if(idEditar){
      const index = productos.findIndex(ind => ind.id === idEditar)
      productos[index] = nuevoProducto;
      idEditar = undefined;
      btn.innerText = "Agregar Producto"
      btn.classList.remove("btn-success")
    }else{
        productos.push(nuevoProducto)
      
    }
  
    Swal.fire({
      icon: 'success',
      titulo: 'Producto Agregado',
      text: 'El producto se ha agregado correctamente'
    })
  
    paintProduct(productos)

    localStorage.setItem("productos", JSON.stringify(productos))
  
    formProductHTML.reset()
    elm.titulo.focus()
  
  })
  
  
  // ! Funcion para pintar productos
  function paintProduct(arrayPaint) {
    tableBodyHTML.innerHTML = "";
  
    arrayPaint.forEach( function(productos) {
    
      tableBodyHTML.innerHTML += 
      `<tr>
    
        <th class="table-imagen" scope="row">
          <img src=${productos.imagen} alt="X-box">
        </th>
        <td class="table-titulo">${productos.titulo}</td>
        <td class="table-descripcion">${productos.descripcion}</td>
        <td class="table-precio">${productos.precio}</td>
        <td class="table-categoria">${productos.categoria}</td>
        <td>
          <div class="d-flex gap-1">
            <button class="btn btn-danger btn-sm" onclick="deleteProduct('${productos.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button class="btn btn-success btn-sm" onclick="editProduct('${productos.id}') " data-bs-toggle="modal" data-bs-target="#formModal">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </div> 
          
        </td>
      </tr>`
    })
  }
  
  
  // ! Funcion para editar Productos
  const editProduct = (id) => { 
    const productToEdit = productos.find( (prod) => {
      if( prod.id === id ) {
        return true
      }
    })
  
    if(!productToEdit) return;

  
    idEditar = productToEdit.id
    
  
    const elementsFromForm = formProductHTML.elements;
    elementsFromForm.titulo.value = productToEdit.titulo;
    elementsFromForm.precio.value = productToEdit.precio;
    elementsFromForm.categoria.value = productToEdit.categoria;
    elementsFromForm.imagen.value = productToEdit.imagen;
    elementsFromForm.descripcion.value = productToEdit.descripcion;
  
    
    
    btn.innerText = "Editar Producto"
    btn.classList.add("btn-success")
  
  
  
    
  
  }
  

  // ! Funcion para filtrar productos 
  inputSearchHTML.addEventListener('keyup', evt => {
    
    const search = evt.target.value.toLowerCase();
  
    const result = productos.filter( (product) => {
  
      const titulo = product.titulo.toLowerCase();
      if( titulo.includes(search) ) {
        return true
      }
      return false
    })
    paintProduct(result)
  })
  
// ! Funcion para borrar productos
const deleteProduct = (id) => {

  Swal.fire({
    title: 'Delete product',
    icon: 'error',
    text: 'Do you want to delete this product?',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
  }).then((result => {
    if(result.isConfirmed){
      const index = productos.findIndex((productFindIndex) => {
        if(productFindIndex.id === id){
          return true
        }
        return false
      })
      productos.splice(index, 1)
      paintProduct(productos)
      localStorage.setItem("productos", JSON.stringify(productos))
    }
  }))


}
  
  // Llamo a la funcion
  paintProduct(productos)
  
  
  // # Funcion para obtener el formato de fecha
  function getDate() {
    //Formateo la fecha
    const date = new Date()
    let month = date.getMonth() + 1
    const year = date.getFullYear()  
    let day = date.getDate()
    const formatedDate = `${year}-${month}-${day}`
  
    if( month < 10) {
      month = '0' + month
    }
    if(day < 10) {
      day = '0' + day
    }
    
    return formatedDate
  }