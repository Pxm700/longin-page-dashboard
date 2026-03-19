function login(){
let email = document.querySelector(".usuario").value
let senha = document.querySelector(".senha").value

if(email == "Pedro@gmail.com" && senha == "12345"){

    localStorage.setItem("usuarioLogado",email)

     window.location.href = "dashboard.html"

} else{
    alert("usuario ou senha incorretos")
}
}

function mostrarNome(){

    let email= localStorage.getItem("usuarioLogado");
    
    if(email){
        const nome = email.split("@")[0];
        const elementoNome = document.getElementById("nomeUsuario");

        if (elementoNome){
            elementoNome.textContent = nome;
        }
    }
}

function logout(){
    localStorage.removeItem("usuarioLogado");

        window.location.href = "index.html"
}

document.addEventListener("DOMContentLoaded",function(){
    mostrarNome();
})

function toggleSidebar(){
    const sidebar = document.querySelector('.sidebar')
    const main = document.querySelector('.main')

    sidebar.classList.toggle('hidden')
    main.classList.toggle('full')
}