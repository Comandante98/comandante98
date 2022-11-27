var comida = ["https://adveryon.sirv.com/Pagina%20web/Frutas.jfif", "https://adveryon.sirv.com/Pagina%20web/Verduras.jfif", "https://adveryon.sirv.com/Pagina%20web/Harinas.jfif",
        "https://adveryon.sirv.com/Pagina%20web/Lacteos.jfif", "https://adveryon.sirv.com/Pagina%20web/Dulces.jfif", "https://adveryon.sirv.com/Pagina%20web/Bebidas%20no%20Alcoholicas.jfif",
        "https://adveryon.sirv.com/Pagina%20web/Bebidas%20Alcoholicas.jfif", "https://adveryon.sirv.com/Pagina%20web/Carne%20roja.jfif", "https://adveryon.sirv.com/Pagina%20web/Carne%20de%20Pollo.jfif",
        "https://adveryon.sirv.com/Pagina%20web/Pescados%20y%20Mariscos.jfif"];
var cont = 0;
var d1 = "Las frutas son necesarias para cualquier dieta saludable, y si bien todas contienen azucar, con un consumo moderada se puede consumir cualquiera. Habiendo dicho esto, las mas recomendadas son las que tiene cascara como naranjas o kiwis y tambien frutas como las manzanas, cereza y ciruelas todas estas poseen cualidades que ayudan a mantener un buen nivel de azucar, las frutas a evitar son las que poseen baja cantidad de fibra y al contenido de carbohidratos como las uvas, sandias y el higo";
var d2 = "Las verduras son una de las comidas mas importantes para los diabeticos, debido a su alto valor nutricional bajo contenido en carbohidratos cualquiera es recomendada, lo unico a tener en cuenta es su cantidad de carbohidratos a lo hora de contarlos teniendo en cuenta nuestra dieta";
var d3 = "Los alimentos derivados de la harina preferiblemente se deben evitar o comer con mucha moderacion/corregirse adecuadamente ya que estos se convierten en glucosa inmediatemente entren en el cuerpo, esto incluye pan, galletas, masas, pastas entre otros";
var d4 = "La leche y su derivados trae muchos nutrientes necesarios para una alimentacion sana (el calcio principalmente) pero igualmente en el caso de la diabetes requiere un consumo moderado y preferiblemente que sea descremada o baja en grasas";
var d5 = "Aunque uno piense que la comida dulce este completamente prohibida para los diabeticos esto no es asi, lo que uno debe fijarse en cualquier alimento es su cantidad de carbohidratos, no que tan dulce se sienta un alimento, por ejemplo unos caramelos podria parecer que afectarian mas que unos bizcochos salados pero generalmente es completamente al reves. Si una persona tiene un atojo con un dulce en particular puede incorporarlo a la dieta haciendo los ajustes necesarios y nunca esta de mas tener a mano algo que pueda subir el azucar en caso de una hipoglucemia";
var d6 = "La bebida mas recomendada, para sorpresa de nadie, es el agua, es la mejor forma de hidratar el cuerpo y no posee azucar, despues el cafe y el te, ambos sin azucar pero si con edulcaorantes naturales como la stevia, son tambien recomendados y los jugos de vegetales o jugos de fruta en polvo reducidos en azucar tambien los son, las bebidas a evitar son los jugos de frutas naturales ya que son azucar puro, las gaseosas y bebidas energizantes";
var d7 = "Las bebidas alcoholicas, como siempre, se deben tomar con moderacion y en el caso de la diabetes hay recomendaciones extras: ya que el higado se encarga de distribuir la glucosa en el cuerpo y tambien de procesar el alcohol, el consumo de este puede provocar un declive en el nivel de azucar en sangre por lo tanto lo primero y principal es nunca tomar con el estomago vacio, esto reduce bastante el riesgo de una hipoglucemia que para agregar puede tener sintomas similares a estar embriagado que puede confundir a otra persona, por lo tanto otra recomedacion es nunca tomar solo, tambien se deberian evitar las bebidas alcoholicas que se mezclan con otras bebidas dulces y tambien siempre tener en cuenta que el consumo excesivo y continuo de alcohol puede dañar el higado que juega un papel muy importante en una persona con diabetes y puede provocar un deterioro a la hora de controlar el nievel de glucosa en sangre";
var d8 = "La carne rojas mas recomendadas son las carnes magras, es decir, las carnes con bajo contenido en grasa y la carne en si no posee demasiados carbohidratos asi que su consumo es muy recomendado por su alto valor nutritivo";
var d9 = "La carne de pollo , similar a la roja, es muy recomendada y un poco mas quizas por su bajo contenido calorico y menor contenido de grasa, se recomienda la pechuga preferentemente y evitar la piel";
var d10 = "La carne de pescados y mariscos tienen muchos nutrientes muy utiles para una dieta saludable y son de las comidas mas recomendadas en la diabetes por su bajo contenido graso";
var listad = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];

    function carrusel(comidas, reco) {
        descripcion.innerHTML = listad[0];
        comidas.addEventListener('click', e => {
            let atras = comidas.querySelector('.anterior'),
                adelante = comidas.querySelector('.siguiente'),
                img = comidas.querySelector('img'),
                obj = e.target;

            if (obj == atras) {
                if (cont > 0) {
                    img.src = comida[cont - 1];
                    cont--;
                    descripcion.innerHTML = listad[cont];
                } else {
                    img.src = comida[comida.length - 1];
                    cont = comida.length - 1;
                    descripcion.innerHTML = listad[cont];
                }
            } else if (obj == adelante) {
                if (cont < comida.length - 1) {
                    img.src = comida[cont + 1];
                    cont++;
                    descripcion.innerHTML = listad[cont];
                } else {
                    img.src = comida[0];
                    cont = 0;
                    descripcion.innerHTML = listad[cont];
                }
            }
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        let comidas = document.querySelector('.comidas');

        carrusel(comidas);
    });