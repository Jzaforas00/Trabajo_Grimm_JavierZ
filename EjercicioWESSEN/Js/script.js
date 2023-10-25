const  ArrayWesen = [];

class Wesen{
    constructor(nombre, foto, tipo, peligrosidad, descripcion, notas){
        this.nombre = nombre;
        this.foto = foto;
        this.tipo = tipo;
        this.peligrosidad = peligrosidad;
        this.descripcion = descripcion;
        this.notas = notas;
    }
}

const Alpe = new Wesen("Alpe", "img/alpe.jpg", "monstruo", "neutral", "El Alpe tiene un cuerpo esbelto, cubierto de un pelaje corto de color marrón verdoso", "");
const Anubis = new Wesen("Anubis", "img/anubis.jpeg", "canido", "peligroso", "Su cuerpo, a diferencia de la mayoría de los cánidos, no tiene pelo y su color de piel es beige pálido. Su característica más llamativa es un hocico largo que termina en una nariz parecida a la de un perro.", "");
const Balam = new Wesen("Balam", "img/balam.jpeg", "felino", "peligroso", "Cuando se les hace llorar, a los Balam les crece pelo sobre la cabeza y el cuerpo, pero al igual que muchos Wesen, su cabello no se ve afectado. Muestran manchas distintivas, parecidas a rayas, similares a las de un jaguar o un leopardo.", "");
const Bauerschwein = new Wesen("Bauerschwein", "img/bauerschwein.jpeg", "cerdo", "pacifico", "Cuando se wocan, tienen una similitud específica con un jabalí, ya que tienen un hocico parecido al de un cerdo, orejas puntiagudas y una cara arrugada.", "");
const Coyotl = new Wesen("Coyotl", "img/coyotl.jpeg", "canido", "peligroso", "Los Coyotl tienen un trastorno bastante severo: su cara se remodela, les crece el pelaje, su hocico se alarga, sus orejas crecen y se vuelven más cánidos, ganan dientes afilados como navajas y sus ojos cambian de color.", "");
const Cucuy = new Wesen("Cucuy", "img/cucuy.jpeg", "monstruo", "neutral", "Cuando se despierta, El Cucuy adquiere ojos amarillos con escleróticas negras, una boca ancha llena de dientes afilados, orejas puntiagudas y garras largas. Poseen canas en la cabeza y la barbilla y tienen una habilidad inexplicable para escuchar gritos de auxilio a kilómetros de distancia.", "");
const Dickfellig = new Wesen("Dickfellig", "img/dickfellig.jpeg", "rinoceronte", "neutral", "Cuando Dickfellig se despierta, ambos lados de sus caras adquieren una piel dura y llena de baches, y les crecen uno o dos cuernos parecidos a los de un rinoceronte, con el cuerno primario brotando de su nariz.", "");
const Excandesco = new Wesen("Excandesco", "img/excandesco.jpeg", "monstruo", "violento", "Cuando se despiertan, los Excandescos toman la forma de un humano compuesto de roca ígnea de color negro azabache. Tienen tres dedos en las manos y los pies. Al liberar grandes cantidades de fósforo blanco a través de su piel, los excandescos pueden generar llamas intensas.", "");
const Geier = new Wesen("Geier", "img/geier.jpeg", "monstruo", "peligroso", "Cuando los Geiers se despiertan, las manos de las criaturas se alargan y les crecen garras afiladas, que utilizan para defenderse o atacar. A sus pies les crece una garra adicional en el talón, lo que hace que los ataques desde el aire sean más efectivos. También desarrollan una nariz en forma de gancho, que se asemeja al pico de un buitre.", "");
const Inugami = new Wesen("Inugami", "img/inugami.webp", "monstruo", "neutral", "Cuando los Inugami se despiertan, adquieren una melena larga y blanca alrededor de la cara, ojos azules brillantes y brillantes, un rinario canino de color marrón oscuro a negro y labios negros más grandes. Sus manos no se ven afectadas por su transformación. También tienen parches de piel sin pelo alrededor de la boca y los ojos.", "");

ArrayWesen.push(Alpe, Anubis, Balam, Bauerschwein, Coyotl, Cucuy, Dickfellig, Excandesco, Geier, Inugami);

//Comprobar formulario
function comprobarCampos() {
    var nombre = document.getElementById("nombre").value;
    var imagen = document.getElementById("imagen").value;
    var tipo = document.getElementById("tipo").value;
    var peligrosidad = document.querySelector('input[name="peligrosidad"]:checked');
    var descripcion = document.getElementById("descripcion").value;

    if (nombre === "" || imagen === "" || tipo === "seleccione" || peligrosidad === null || descripcion === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    } else{
        return true;
    }

}

//Funcion monstrar Wesen
function mostrarWesen() {
    const wesenList = document.getElementById("wesen-list");
    
    wesenList.innerHTML = '';

    ArrayWesen.forEach(wesen => {
        const listItem = document.createElement("li");
        const button = document.createElement("button");
        button.addEventListener("click", () => cargarDatosFormulario(wesen));
        const wesenImage = document.createElement("img");
        wesenImage.src = wesen.foto;
        wesenImage.alt = wesen.nombre;

        const wesenName = document.createElement("p");
        wesenName.textContent = wesen.nombre;

        button.appendChild(wesenImage);
        button.appendChild(wesenName);
        listItem.appendChild(button);

        wesenList.appendChild(listItem);
    });
}

//Funcion añadir Wesen
function anadirWesen() {
    if (!comprobarCampos()) {return;}
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("imagen").value;
    const tipo = document.getElementById("tipo").value;
    const peligrosidad = document.querySelector('input[name="peligrosidad"]:checked').value;
    const descripcion = document.getElementById("descripcion").value;
    const notas = document.getElementById("notas").value;

    const nuevoWesen = new Wesen(nombre, imagen, tipo, peligrosidad, descripcion, notas);
    ArrayWesen.push(nuevoWesen);

    document.querySelector('form').reset();

    mostrarWesen();
}

//Funcion cargar Wesen
function cargarDatosFormulario(wesen) {
    const nombreInput = document.getElementById("nombre");
    const imagenInput = document.getElementById("imagen");
    const tipoInput = document.getElementById("tipo");
    const peligrosidadInputs = document.querySelectorAll('input[name="peligrosidad"]');
    const descripcionInput = document.getElementById("descripcion");
    const notasInput = document.getElementById("notas");

    nombreInput.value = wesen.nombre;
    imagenInput.value = wesen.foto;
    tipoInput.value = wesen.tipo;

    for (const peligrosidadInput of peligrosidadInputs) {
        if (peligrosidadInput.value === wesen.peligrosidad) {
            peligrosidadInput.checked = true;
        }
    }

    descripcionInput.value = wesen.descripcion;
    notasInput.value = wesen.notas;
}

//Funcion eliminar Wesen
function borrarWesen(){
    const nombre = document.getElementById("nombre").value;
    const index = ArrayWesen.findIndex(wesen => wesen.nombre === nombre);
    if (index !== -1) {
        ArrayWesen.splice(index, 1);
        document.querySelector('form').reset();

        mostrarWesen();
    }
}

//Funcion modificar Wesen
function modificarWesen() {
    if (!comprobarCampos()) {return;}
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("imagen").value;
    const tipo = document.getElementById("tipo").value;
    const peligrosidad = document.querySelector('input[name="peligrosidad"]:checked').value;
    const descripcion = document.getElementById("descripcion").value;
    const notas = document.getElementById("notas").value;
    
    const index = ArrayWesen.findIndex(wesen => wesen.nombre === nombre);
    if (index !== -1) {
        ArrayWesen[index].imagen = imagen;
        ArrayWesen[index].tipo = tipo;
        ArrayWesen[index].peligrosidad = peligrosidad;
        ArrayWesen[index].descripcion = descripcion;
        ArrayWesen[index].notas = notas;

        document.querySelector('form').reset();

        mostrarWesen();
    }
}

//Ejecutar monstrar al cargar la pagina
document.addEventListener("DOMContentLoaded", function() {
    mostrarWesen();
});