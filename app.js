
/*----------------------------Calculadora nutricional--------------------------------*/
class Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.proteinas = proteinas;
        this.carbohidratos = carbohidratos;
        this.grasas = grasas;
    }
}

class Fruta extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas, vitaminaC) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
        this.vitaminaC = vitaminaC;
    }
}

class Verdura extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas, vitaminaK) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
        this.vitaminaK = vitaminaK;
    }
}

class Carne extends Alimento {
    constructor(nombre, calorias, proteinas, carbohidratos, grasas, tipo) {
        super(nombre, calorias, proteinas, carbohidratos, grasas);
        this.tipo = tipo;
    }
}

let alimentosSeleccionados = [];
const objetivosUsuario = {
    calorias: 2000,
    proteinas: 50,
    carbohidratos: 300,
    grasas: 70
};

function agregarAlimento() {
    const select = document.getElementById("alimento");
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const alimentoSeleccionado = select.value;

    let alimento;

    switch (alimentoSeleccionado) {
        case "manzana":
            alimento = new Fruta('Manzana', 52, 0.26, 13.8, 0.17, 4.6);
            break;
        case "espinaca":
            alimento = new Verdura('Espinaca', 23, 2.9, 3.6, 0.4, 482.9);
            break;
        case "pollo":
            alimento = new Carne('Pollo', 165, 31, 0, 3.6, 'Aves');
            break;
        default:
            break;
    }

    // Multiplicamos las propiedades nutricionales por la cantidad seleccionada
    alimento.calorias *= cantidad;
    alimento.proteinas *= cantidad;
    alimento.carbohidratos *= cantidad;
    alimento.grasas *= cantidad;

    alimentosSeleccionados.push(alimento);

    mostrarResultados();
}

function mostrarResultados() {
    const totalCalorias = alimentosSeleccionados.reduce((acc, curr) => acc + curr.calorias, 0);
    const totalProteinas = alimentosSeleccionados.reduce((acc, curr) => acc + curr.proteinas, 0);
    const totalCarbohidratos = alimentosSeleccionados.reduce((acc, curr) => acc + curr.carbohidratos, 0);
    const totalGrasas = alimentosSeleccionados.reduce((acc, curr) => acc + curr.grasas, 0);

    document.getElementById("total-calorias").textContent = `Calorías: ${totalCalorias}`;
    document.getElementById("total-proteinas").textContent = `Proteínas: ${totalProteinas}g`;
    document.getElementById("total-carbohidratos").textContent = `Carbohidratos: ${totalCarbohidratos}g`;
    document.getElementById("total-grasas").textContent = `Grasas: ${totalGrasas}g`;

    const mensajeObjetivos = compararConObjetivos({calorias: totalCalorias, proteinas: totalProteinas, carbohidratos: totalCarbohidratos, grasas: totalGrasas}, objetivosUsuario);
    document.getElementById("objetivos-mensaje").textContent = mensajeObjetivos;
}

function compararConObjetivos(contenidoNutricionalTotal, objetivos) {
    let mensaje = "Dentro del rango deseado";

    if (contenidoNutricionalTotal.calorias > objetivos.calorias) {
        mensaje = "Se está excediendo en calorías";
    } else if (contenidoNutricionalTotal.calorias < objetivos.calorias) {
        mensaje = "Falta en calorías";
    }

    if (contenidoNutricionalTotal.proteinas > objetivos.proteinas) {
        mensaje += "\nSe está excediendo en proteínas";
    } else if (contenidoNutricionalTotal.proteinas < objetivos.proteinas) {
        mensaje += "\nFalta en proteínas";
    }

    if (contenidoNutricionalTotal.carbohidratos > objetivos.carbohidratos) {
        mensaje += "\nSe está excediendo en carbohidratos";
    } else if (contenidoNutricionalTotal.carbohidratos < objetivos.carbohidratos) {
        mensaje += "\nFalta en carbohidratos";
    }

    if (contenidoNutricionalTotal.grasas > objetivos.grasas) {
        mensaje += "\nSe está excediendo en grasas";
    } else if (contenidoNutricionalTotal.grasas < objetivos.grasas) {
        mensaje += "\nFalta en grasas";
    }

    return mensaje;
}


/* La siguiente línea selecciona el elemento HTML con la clase ".menu-btn" y le añade un evento "click"
 Cuando se hace click, se ejecutará la función de flecha
*/
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    }); //Al hacer click se selecciona el ".nav-menu". Luego se añade o se quita la clase "show" con toggle(), así hace que se muestre o se oculte el menú
    
    
    //Scrollreveal() es una biblioteca, toma cada clase al hacer scroll y con el delay retrasa la aparición en milisegundos
    ScrollReveal().reveal('.showcase');
    ScrollReveal().reveal('.news-cards', { delay: 400 });
    ScrollReveal().reveal('.cards-banner-one', { delay: 400 });
    ScrollReveal().reveal('.cards-banner-two', { delay: 400 });


