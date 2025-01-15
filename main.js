$(function () {
    let fotos = [
        "https://cdn.onemars.net/sites/perfect-fit_es_NkyIN_JAs8/image/fotolia_97829588_subscription_yearly_m_1616597946239.png",
        "https://cdn0.expertoanimal.com/es/posts/7/4/3/como_ayudar_a_un_gatito_a_defecar_20347_orig.jpg",
        "https://nupec.com/wp-content/uploads/2022/09/persian-kitten-2021-08-26-17-35-23-utc-min.jpg",
    ];

    let color = "#ffffff";

    $("#selector").on("input", function () {
        color = $(this).val();
        $("#Color").click(function () {
            $(".card").css({ "background-color": `${color}` });
        });
    });

    $("#Añadir").click(function () {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let cambiar = document.createElement("button");
        let borrar = document.createElement("button");

        div.className = "card";
        img.src = "https://nupec.com/wp-content/uploads/2022/09/persian-kitten-2021-08-26-17-35-23-utc-min.jpg";
        cambiar.textContent = "Cambiar";
        borrar.textContent = "Borrar";

        div.appendChild(img);
        div.appendChild(cambiar);
        div.appendChild(borrar);

        $(".container").append(div);
    });

    $(document).on("click", ".card button", function () {
        if ($(this).text() === "Borrar") {
            $(this).closest(".card").remove();
        }
    });

    $(document).on("click", ".card button", function () {
        if ($(this).text() === "Cambiar") {
            let random = Math.floor(Math.random()*3)
            let img = $(this).closest(".card").find("img");
            img.attr("src", fotos[random]);
        }
    });
});
