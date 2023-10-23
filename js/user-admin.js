

const usuarios = JSON.parse(localStorage.getItem("usuarios"))

if(JSON.parse(localStorage.getItem("usuarios")) === null ) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}


const btn = document.querySelector('button[type="submit"]')
const tableBodyUserHTML = document.querySelector("#table-body")

mostrarUsuarios(usuarios)

// ! Funcion para pintar usuarios
function mostrarUsuarios(arrayPaint) {
    tableBodyUserHTML.innerHTML = "";
  
    arrayPaint.forEach( function(usuarios) {
    
        tableBodyUserHTML.innerHTML += 
      `<tr>
    
        <th class="id">${usuarios.id}</th>
        <td class="table-nombre">${usuarios.nombre}</td>
        <td class="table-email">${usuarios.email}</td>
        <td class="table-contrasenia">${usuarios.contrasenia}</td>
        <td class="table-role">${usuarios.role}</td>
        <td>
          <div class="d-flex gap-1">
            <button class="btn btn-danger btn-sm" onclick="borrarUsuarios('${usuarios.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
            
          </div> 
          
        </td>
      </tr>`
    })
}

//!Funcion para filtrar usuarios

const inputSearchHTML = document.getElementById("buscar")

inputSearchHTML.addEventListener('keyup', evt => {
    const busqueda = evt.target.value.toLowerCase();
    const resultado = usuarios.filter((usr) => {
        const nombre = usr.nombre.toLowerCase();
        if( nombre.includes(busqueda)) {
            return true
        }
        return false
    })
    mostrarUsuarios(resultado)
})


// !Funcion para borrar usuarios
const borrarUsuarios = (id) => {
    Swal.fire({
        title: 'Borrar Usuario',
        icon: 'error',
        text: 'Seguro que quieres eliminar este usuario?',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      }).then((result => {
        if(result.isConfirmed){
          const index = usuarios.findIndex((usuariosIndice) => {
            if(usuariosIndice.id === id){
              return true
            }
            return false
          })
          usuarios.splice(index, 1)
          mostrarUsuarios(usuarios)
          localStorage.setItem("usuarios", JSON.stringify(usuarios))
        }
    }))
}


