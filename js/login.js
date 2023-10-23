const userInicio = [
    {
        nombre: 'Juan Perez',
        email: 'admin@admin.com',
        id: '1',
        contrasenia: 'admin',
        role: 'ROLE_ADMIN'
    },
    {
        nombre: 'Magali Perez',
        email: 'magali@perez.com',
        id: '2',
        contrasenia: 'alfabeta',
        role: "CLIENT_USER"
    }
]



if(localStorage.getItem("usuarios") === null){
    localStorage.setItem("usuarios", JSON.stringify(userInicio))
}
const usuarios = JSON.parse(localStorage.getItem("usuarios"))



const loginForm = document.getElementById("login")


if(loginForm) {
    loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    console.log(usuarios)

    const emailIngresado = event.target.elements.email.value;
   
    const passIngresado = event.target.elements.password.value;
 

    const usuarioExistente = usuarios.find(usr => {
        if(usr.email === emailIngresado){
            return true
        }
        return false
    })

    if(!usuarioExistente || usuarioExistente.contrasenia !== passIngresado){
        Swal.fire("Login Incorrecto", "error");
        return;
    }

    Swal.fire("Login Correcto","success")
    

    
   
    delete usuarioExistente.password

    localStorage.setItem("currentUser", JSON.stringify(usuarioExistente))

    setTimeout(function(){
        window.location.href = '/index.html'
    }, 2000)


    
})
}
