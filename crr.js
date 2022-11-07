var comida = ["https://adveryon.sirv.com/Pagina%20web/Frutas.jfif", "https://adveryon.sirv.com/Pagina%20web/Verduras.jfif", "https://adveryon.sirv.com/Pagina%20web/Harinas.jfif",
        "https://adveryon.sirv.com/Pagina%20web/Lacteos.jfif", "https://adveryon.sirv.com/Pagina%20web/Dulces.jfif", "https://adveryon.sirv.com/Pagina%20web/Bebidas%20no%20Alcoholicas.jfif",
        "https://adveryon.sirv.com/Pagina%20web/Bebidas%20Alcoholicas.jfif", "https://adveryon.sirv.com/Pagina%20web/Carne%20roja.jfif", "https://adveryon.sirv.com/Pagina%20web/Carne%20de%20Pollo.jfif",
        "https://adveryon.sirv.com/Pagina%20web/Pescados%20y%20Mariscos.jfif"];
var cont = 0;
    function carrusel(comidas) {
        comidas.addEventListener('click', e => {
            let atras = comidas.querySelector('.anterior'),
                adelante = comidas.querySelector('.siguiente'),
                img = comidas.querySelector('img'),
                obj = e.target;

            if (obj == atras) {
                if (cont > 0) {
                    img.src = comida[cont - 1];
                    cont--;
                } else {
                    img.src = comida[comida.length - 1];
                    cont = comida.length - 1;
                }
            } else if (obj == adelante) {
                if (cont < comida.length - 1) {
                    img.src = comida[cont + 1];
                    cont++;
                } else {
                    img.src = comida[0];
                    cont = 0;
                }
            }
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        let comidas = document.querySelector('.comidas');

        carrusel(comidas);
    });