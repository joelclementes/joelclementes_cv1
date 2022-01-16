class app{
    constructor(reset = false) {
        if (reset) {
            let inicio = document.querySelector("#inicio");
            let acerca_de = document.querySelector("#acercade");
            let contacto = document.querySelector("#contacto");
            let pagina = document.querySelector("#pagina");

            pagina.innerHTML = new app().MuestraInicio();

            inicio.addEventListener("click",()=>{
                inicio.className = "active";
                acerca_de.className = "";
                contacto.className = "";
                pagina.innerHTML = new app().MuestraInicio();
            });

            acerca_de.addEventListener("click", () => {
                inicio.className = "";
                acerca_de.className = "active";
                contacto.className = "";
                pagina.innerHTML = new app().MuestraAcercaDe();
            });

            contacto.addEventListener("click",()=>{
                inicio.className = "";
                acerca_de.className = "";
                contacto.className = "active";
                pagina.innerHTML = new app().MuestraContacto();
            });
        }
    }

    MuestraInicio(){
        let pagina = `
        <div class="title">Joel Clemente Serrano</div>
        <div class="subtitle">Analista y desarrollador de sistemas web</div>
        <div>
            <span class="label">Correo electrónico:</span>
            <span class="data">joelclementes@gmail.com</span>
        </div>
        <div>
            <span class="label">Facebook:</span>
            <a href="https://www.facebook.com/joelclementeserrano" target="blank" class="data">joelclementeserrano</a>
        </div>
        <div>
            <span class="label">Instagram:</span>
            <a href="https://www.instagram.com/joelclementes" target="blank" class="data">joelclementes</a>
        </div>
        <div>
            <span class="label">Youtube:</span>
            <a href="https://www.youtube.com/user/joelcs73yt" target="blank" class="data">Joel Clemente Serrano</a>
        </div>
        `;
        return pagina;
    }

    MuestraAcercaDe(){
        let pagina=``;
        return pagina;
    }

    MuestraContacto(){
        let pagina=``;
        return pagina;
    }
}
window.onload = () => new app(true);