class app{
    constructor(reset = false) {
        if (reset) {
            let menu_acercademi = document.querySelector("#menu_acercademi");
            let menu_portafolio = document.querySelector("#menu_portafolio");
            let menu_contacto = document.querySelector("#menu_contacto");

            let acercademi = document.querySelector("#acercademi");
            let portafolio = document.querySelector("#portafolio");
            let contacto = document.querySelector("#contacto");

            acercademi.setAttribute("style","display:flex")
            portafolio.setAttribute("style","display:none");
            contacto.setAttribute("style","display:none");

            menu_acercademi.addEventListener("click",()=>{
                menu_acercademi.className = "active";
                menu_portafolio.className = "";
                menu_contacto.className = "";
                acercademi.setAttribute("style","display:flex")
                portafolio.setAttribute("style","display:none");
                contacto.setAttribute("style","display:none");
            });

            menu_portafolio.addEventListener("click", () => {
                menu_acercademi.className = "";
                menu_portafolio.className = "active";
                menu_contacto.className = "";
                acercademi.setAttribute("style","display:none")
                portafolio.setAttribute("style","display:flex");
                document.querySelector("#contacto").setAttribute("style","display:none");
            });

            menu_contacto.addEventListener("click",()=>{
                menu_acercademi.className = "";
                menu_portafolio.className = "";
                menu_contacto.className = "active";
                acercademi.setAttribute("style","display:none")
                portafolio.setAttribute("style","display:none");
                contacto.setAttribute("style","display:flex");
            });
        }
    }
}
window.onload = () => new app(true);