const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const headerListContent = document.querySelector("nav.navbar")

const headerUserInfo = document.getElementById("user-header-name")

const headerUserAction = document.getElementById("user-action")

headerUserInfo.innerText = currentUser ? currentUser.nombre : ""
if(currentUser){
    headerUserAction.innerHTML = `<button class="logout-button" onclick="logout()">Logout</button>`

    if(currentUser.role === 'ROLE_ADMIN'){
        const adminProductLink = document.createElement('a')
        const adminUserLink = document.createElement('a')
        adminProductLink.classList.add('nav-link')
        adminUserLink.classList.add('nav-link')
        adminUserLink.href = '/pages/admin/user-admin.html'
        adminProductLink.href = '/pages/admin/admin.html';
        adminUserLink.innerHTML = 'Users'
        adminProductLink.innerHTML = 'Prods'

       
        headerListContent.appendChild(adminProductLink);
        headerListContent.appendChild(adminUserLink);
    }

    if(currentUser){
        const registroLink = document.querySelector('nav .nav-link:nth-child(3)')
        
        headerListContent.removeChild(registroLink);
    }

}else{
    headerUserAction.innerHTML = `<a class="btn btn-dark" href="/pages/login/login.html">Login</a>`
}


//!Funcion para desloguearse
function logout() {
    localStorage.removeItem("currentUser")
    setTimeout(function() {
        window.location.href = '/index.html'
    }, 500)
  }





