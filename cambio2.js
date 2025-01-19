$(document).ready(function () {
    let inicio;

    $("#start").on("click", function () {
        let $btn = $(this);
        let $respuesta = $("#respuesta");
        let fin;
        let espera;

        if ($btn.text() === "Púlsame para empezar") {
            espera = Math.random() * (5000 - 3000) + 3000; 
            $btn.removeClass().addClass("wait");

            setTimeout(function () {
                inicio = Date.now();
                $btn.removeClass().addClass("click");
                $btn.text("Click!");
            }, espera);
        } else if ($btn.text() === "Click!") {
            fin = Date.now();
            let marca = fin - inicio;
            $respuesta.text(`Tu tiempo de reacción es: ${marca} ms`);
            $btn.removeClass().addClass("start");
            $btn.text("Púlsame para empezar");
            inicio = 0; 
        }
    });
});
