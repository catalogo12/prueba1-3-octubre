let contador = 0;

const botonIncrementar = document.getElementById('incrementar');
const botonDecrementar = document.getElementById('decrementar');
const valorContador = document.getElementById('valor-contador');
console.log("el valor de botonIncrementar es:")
console.log(botonIncrementar)
console.log("el valor botonDecrementar es:")
console.log(botonDecrementar)
botonIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
});

botonDecrementar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        valorContador.textContent = contador;
    }
});

const baseDeDatos=[
    {
        id:1,
        nombre:"manzana",
        precio:200,
        imagen:"imgenes/manzana.jpg",
    },
    {
        id:2,
        nombre:"pera",
        precio:100,
        imagen:"img/cebolla.jpg",
    },
    {
        id:3,
        nombre:"limones",
        precio:50,
        imagen:"img/calabazin.jpg",
    },
    
];
let carrito=[];
let btn=document.getElementsByClassName("boton");
function agregar(){
        carrito.push(e.target.getAttribute("identificador"));
        console.log(carrito);

}
btn.addEventListener("click",agregar);
