class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = /*html*/`
        <div class="login-container">
            <div class="row center-row">
                <div class="card white z-depth-3">
                    <h5 class="login-title">Registro</h5>
                    <div class="card-content">
                        <div class="input-field col s12">
                            <i class="material-icons suffix">person</i>
                            <input type="text" name="username" id="username" autocomplete="off" autofocus>
                            <label class ="teal-text darken-1" for="username">Usuario</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons suffix" >lock</i>
                            <input type="password" name="password" id="password" autocomplete="off">
                            <label class ="teal-text darken-1" for="password">Contraseña</label>
                        </div>
                        <div class="file-field input-field col s12">
                            <div class="btn teal darken-1" style="margin-top: 10px; margin-bottom: 10px;">
                                <i class="material-icons prefix" style="margin-left: -50px;">photo_camera</i>
                                <span>Cargar fotografía</span>
                                <input type="file" id="uploadPhoto" name="photo" accept="image/*" required>
                            </div>                        
                            <div class="preview">
                                <img id="photoPreview" alt="Vista previa de la imagen">
                            </div>
                        </div> 
                        <button id="btnRegister" class="btn waves-effect waves-light">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}
customElements.define('register-form', RegisterForm);