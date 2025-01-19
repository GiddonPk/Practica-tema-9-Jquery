const btn = document.querySelector("#start");
const respuesta = document.querySelector("#respuesta");

let inicio;
btn.addEventListener("click", () => {
    let fin;
    let espera;

    if (btn.textContent === "Púlsame para empezar") {
        espera = Math.random() * 3000 + 2000;
        btn.textContent = "Espera..";
        btn.className = "wait";

        setTimeout(function () {
            inicio = Date.now();
            btn.className = "click";
            btn.textContent = "Click!";
        }, espera);
    } else if (btn.textContent === "Click!") {
        fin = Date.now();
        let marca = fin - inicio;
        respuesta.textContent = `Tu tiempo de reacción es: ${marca} ms`;
        btn.className = "start"
        btn.textContent = "Púlsame para empezar"
        inicio = 0;
    }
});
