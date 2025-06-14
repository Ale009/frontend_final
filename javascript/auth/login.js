import { URI } from '../uri.js';

document.addEventListener("DOMContentLoaded", () => {

    let btnLogin = document.getElementById("btnLogin");
    // console.log(btnLogin);

    btnLogin.addEventListener("click", () => {
        let varUsername = document.getElementById("username").value;
        let varPassword = document.getElementById("password").value;
        const loader = document.getElementById("login-loader");
        
        loader.style.display = 'block'; // Muestra el loader

        // Unión entre python y javascript
        fetch(`${URI}/api/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: varUsername,
                password: varPassword
            })
        })
        .then(res => res.json())
        .then(data => {
            loader.style.display = 'none'; // Oculta el loader
            if (data.user_id) {
                // Guarda como clave y valor en el localstorage
                localStorage.setItem('user_id', data.user_id);
                M.toast({
                    html: data.mensaje,
                    classes: 'green'
                });
                location.href = 'index.html';
            } else {
                M.toast({
                    html: data.error,
                    classes: 'red'
                });
            }
        })
        .catch(err => {
            loader.style.display = 'none'; // Oculta el loader

            M.toast({
                html: "Error de conexión",
                classes: 'red'
            });
        });      
    });
});