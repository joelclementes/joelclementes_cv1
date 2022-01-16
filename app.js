class app{
    constructor(reset = false) {
        if (reset) {
            let inicio = document.querySelector("#inicio");
            let acerca_de = document.querySelector("#acercade");
            let contacto = document.querySelector("#contacto");
            inicio.addEventListener("click",()=>{
                new app().MuestraInicio();
            });

            acerca_de.addEventListener("click", () => {
                
            });

        }
    }

    MuestraInicio(){
        console.log("Mostrando Inicio")
    }
}
window.onload = () => new app(true);