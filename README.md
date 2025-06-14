# FRONTEND - PROYECTO FINAL

Este proyecto fue desarrollado con **HTML** y **JavaScript**, implementando interacción dinámica y manejo de contenido. A continuación, se detallan los módulos principales:

## 🚀 Módulos Implementados

### 1. **LOGIN**  
   - **Descripción**:  
     Página de autenticación donde el usuario ingresa sus credenciales (usuario y contraseña) para acceder al contenido. Cuenta con la opción de registro.
   - **Tecnologías**:  
     - Validación de campos en tiempo real con JavaScript.
     - Las contraseñas se encriptan a nivel backend.  
     - Almacenamiento local (`localStorage`).  

### 2. **REGISTRO**  
   - **Descripción**:  
     Permite a nuevos usuarios crear una cuenta, se solicitan los siguientes campos:  
     - Nombre de usuario.  
     - Contraseña.  
     - Fotografía de perfil (subida mediante un input de tipo `file`).  
   - **Funcionalidades**:  
     - Preview de la imagen seleccionada antes de subirla.  
     - Validación de contraseña con encriptación en el backend.  

### 3. **ÍNDICE (Galería)**  
   - **Descripción**:  
     Muestra un feed con todas las imágenes subidas por los usuarios. Incluye:  
     - Opción para que el usuario agregue nuevas fotos.  
     - Sección de comentarios en cada imagen.  
   - **Interacción**:  
     - Botones de "Me gusta" y "Comentar" con JavaScript.  
     - Botón flotante para subir nuevas imágenes.  
