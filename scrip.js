
// crear matriz
let car = [], matriz = ["carta1.jpg", "carta2.jpg", "carta3.jpg", "carta4.jpg", "carta5.jpg", "carta6.jpg", "carta7.jpg", "carta8.jpg", "carta1.jpg", "carta2.jpg", "carta3.jpg", "carta4.jpg", "carta5.jpg", "carta6.jpg", "carta7.jpg", "carta8.jpg"];

var cont = 8;
matriz = matriz.sort(() => Math.random() - 0.5);
for (let i in matriz) {
    car.push("f" + matriz[i]);
}


//colocar cartas volteadas
function voltear1() {

    for (let i = 0; i < 16; i++) {
        cont = 8;
        document.images[i].src = "reverso.png";
    } jugar();
}

//jugando
function jugar() {
    let posicion = 0, posicion1 = 0;
    let cartas = document.querySelectorAll(".imagen");
    let i = 0;
    let comparar = [];

    cartas.forEach((carta) => {
        carta.addEventListener('click', () => {
            //leo la carta cliqueada
            posicion = carta.getAttribute("title");
            posicion = parseInt(posicion);

            //realizo verificación que no se cliquee la misma carta
            if (posicion != posicion1) {
                //realizo el cambio de la imagen del reverso por la del frente
                document.images[posicion - 1].src = matriz[posicion - 1];
                //almaceno la información de la carta cliqueada
                comparar[i] = [carta.getAttribute("src"), posicion];
                i++; posicion1 = posicion;
                // se verifica que sea la segunda carta cliqueada
                if (i == 2) {
                    setTimeout(() => {
                        //se comparan los nombres de las cartas para ver si es la misma
                        if (comparar[0][0] === comparar[1][0]) {
                            cont--; i = 0;
                            document.images[comparar[0][1] - 1].src = car[comparar[0][1] - 1];
                            document.images[comparar[1][1] - 1].src = car[comparar[1][1] - 1];
                            document.getElementById("parejas").innerHTML = cont;
                        } else {
                            i = 0;
                            document.images[comparar[0][1] - 1].src = "reverso.png";
                            document.images[comparar[1][1] - 1].src = "reverso.png";
                            posicion1 = 0;
                        }
                    }, 1000);
                }
            }




        });

    }
    );

}


//inicia el juego
document.getElementById('inicio').addEventListener('click', voltear1);