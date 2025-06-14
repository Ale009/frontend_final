import { URI }  from '../uri.js';

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("uploadPhoto");
    const btnRegister = document.getElementById("btnRegister");
    const photoPreview = document.getElementById("photoPreview");

    // 1. Configurar el preview de la imagen
    fileInput.addEventListener("change", (e) => {
        const file = fileInput.files[0];
        // Mostrar vista previa
        const reader = new FileReader();
        reader.onload = (event) => {
            photoPreview.src = event.target.result;
            photoPreview.style.display = "block";
        };
        reader.readAsDataURL(file);
    });

    btnRegister.addEventListener("click", async () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const file = fileInput.files[0];
            
         // Validación de campos
        if (!username || !password) {
            M.toast({ html: "Usuario y contraseña son obligatorios", classes: "red" });
            return;
        }

        if (!file) {
            M.toast({ html: "Debes seleccionar una foto", classes: "red" });
            return;
        }
        // Crear FormData para enviar archivo + campos
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("photo", file);

        // Unión entre python y javascript
        fetch(`${URI}/api/register`, {
            method: 'POST',
            body: formData,
            })
            .then(res => {
                if(res.ok) {
                    M.toast({
                        html: "Usuario agregado correctamente",
                        classes: "green"
                    });
                    location.href = 'login.html';
                }else {
                    M.toast({
                        html:"No se creó el usuario",
                        classes: 'red'
                    });
                }
            })
            .catch(err => {
                M.toast({
                    html: "Error de conexión",
                    classes: 'red'
                });
            });      
    });
});
