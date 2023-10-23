
const usuarios = JSON.parse(localStorage.getItem("usuarios"))



const btnRegistrar = document.querySelector('button[type="submit"]')

const formRegistrarHTML = document.getElementById("form-registrar")
  


formRegistrarHTML.addEventListener('submit', (evt) => {
  
    evt.preventDefault()
  
    const elm = formRegistrarHTML.elements;

    const nuevoUsuario = {
      nombre: elm.nombre.value,
      email: elm.email.value,
      id: crypto.randomUUID(),      
      contrasenia: elm.contrasena.value,
      role: 'CLIENT_USER',
    }
    
    console.log(nuevoUsuario)
  
    usuarios.push(nuevoUsuario)
    
    
  
    Swal.fire({
      icon: 'success',
      title: 'Usuario Agregado',
      text: 'Sera redirigido a la pagina principal donde debera logearse'
    })
  
  

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    
    setTimeout(function(){
        window.location.href = '/index.html'
    }, 2000)
    
  
  })
  