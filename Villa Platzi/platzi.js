var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo ={
    url: "https://i.postimg.cc/jSbdyXvc/tile.webp",
    cargaOK: false
};
var vaca ={
    url: "https://i.imgur.com/ELFyyz8.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK);
    {
        var cantidad = aleatorio (1, 25)
        console.log(cantidad + " vacas");
        for(var v=0; v< cantidad; v++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x * 70;
            var y = y * 70;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
} 


function aleatorio (min, max)
{
    var resultado;
    resultado = Math.floor(Math.random()*(max-min+1)) + min 
    return resultado;
}