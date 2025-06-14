import { URI }  from '../uri.js';

document.addEventListener("DOMContentLoaded", () => {
        let fileInput = document.getElementById("uploadPhoto");

    
    fileInput.addEventListener("change", () => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                photoPreview.src = event.target.result;
                photoPreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
        let formData = new FormData();
        formData.append('photo', file);
        // Unión entre python y javascript
        fetch(`${URI}/api/uploadpic`, {
            method: 'POST',
            body: formData
        })
        .then(res => {
            //loader.style.display = 'none'; // Oculta el loader
            
            if (res.ok) {
                M.toast({
                    html: "Foto subida exitosamente",
                    classes: 'green'
                });
            } else {
                M.toast({
                    html: "Error al subir la foto ",
                    classes: 'red'
                });
            }
            return res.json();
        })
        .catch(err => {
            //loader.style.display = 'none'; // Oculta el loader
            M.toast({
                html: "Error de conexión",
                classes: 'red'
            });
        });
    });
});