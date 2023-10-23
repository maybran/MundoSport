
localStorage.setItem("nombre", "Mayra Magali")

localStorage.setItem("currentUser", "Facundo Agustin")

const nombreGuardado = localStorage.getItem("nombre")

Swal.fire('Bienvenido', `Que bueno verte de nuevo ${nombreGuardado}`)

const usuarios = [
    {
        nombre: 'Juan Perez',
        email: 'juan@perez.com',
        id: '1',
    },
    {
        nombre: 'Magali Perez',
        email: 'magali@perez.com',
        id: '2',
    }
]

localStorage.setItem("usuariosGuardados", JSON.stringify(usuarios))