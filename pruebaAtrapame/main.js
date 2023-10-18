    console.log('hola')


    const boton = document.querySelector('#boton')
    const boton2 = document.querySelector('#boton2')
    boton.addEventListener('click', () => numAleatorio(1));
    boton2.addEventListener('click', () => numAleatorio(2));

    const j1 = document.querySelector('#j1')
    const j2 = document.querySelector('#j2')
    let resultado=0
    let resultado2=0
    
    let punto = `<div id="j1" class="ficha jugador1"></div>`
    document.querySelector(`#casillas1 #c0`).innerHTML = punto

    let punto2 = `<div id="j2" class="ficha jugador2"></div>`
    document.querySelector(`#casillas2 #c0`).innerHTML = punto2
   


    function numAleatorio(jugador) {
        let ultimoJugador=0
        if(jugador==1){
        ultimoJugador=1
        const x = Math.ceil(Math.random() * 6);
        let resultadoAntiguo = resultado;
        resultado = resultado + x;
        console.log(x);
        console.log(resultado);
    
        if (resultado == 20) {
            confirm('Has ganado');
            document.querySelector(`#casillas1 #c0`).innerHTML = `<div id="j1" class="ficha jugador1"></div>`;
            document.querySelector(`#casillas2 #c0`).innerHTML = `<div id="j2" class="ficha jugador2"></div>`;
            document.querySelector(`#casillas2 #c${resultado2}`).innerHTML = "";
            resultado = 0;
            resultado2 = 0;
        }
    
        if (resultado > 20) {
            let sobra = resultado - 20;
            resultado = 20 - sobra;
        }
       
    
        document.querySelector(`#casillas1 #c${resultadoAntiguo}`).innerHTML = '';
        document.querySelector(`#casillas1 #c${resultado}`).innerHTML = `<div id="j1" class="ficha jugador1"></div>`
        }
        if(jugador==2){
            ultimoJugador=2
            const x2 = Math.ceil(Math.random() * 6);
            let resultadoAntiguo2 = resultado2;
            resultado2 = resultado2 + x2;
            console.log(x2)
            console.log(resultado2);
        
            if (resultado2 == 20) {
                confirm('Has ganado');
                document.querySelector(`#casillas1 #c0`).innerHTML = `<div id="j1" class="ficha jugador1"></div>`;
                document.querySelector(`#casillas2 #c0`).innerHTML = `<div id="j2" class="ficha jugador2"></div>`;
                document.querySelector(`#casillas1 #c${resultado}`).innerHTML = "";
                resultado = 0;
                resultado2 = 0;
            }
            if (resultado2 > 20) {
                let sobra2=resultado2-20
                resultado2=20-sobra2
                
            }
            
            
            document.querySelector(`#casillas2 #c${resultadoAntiguo2}`).innerHTML = ''
            document.querySelector(`#casillas2 #c${resultado2}`).innerHTML = `<div id="j2" class="ficha jugador2"></div>`
        }

        if (resultado === resultado2) {
            confirm('Iguales');
        
            if (resultado > 0 && resultado2 > 0) {
                if (ultimoJugador === 1) {
                    document.querySelector(`#casillas1 #c0`).innerHTML = `<div id="j1" class="ficha jugador1"></div>`;
                    document.querySelector(`#casillas1 #c${resultado}`).innerHTML = "";
                    resultado = 0;
                } else if (ultimoJugador === 2) {
                    document.querySelector(`#casillas2 #c0`).innerHTML = `<div id="j2" class="ficha jugador2"></div>`;
                    document.querySelector(`#casillas2 #c${resultado2}`).innerHTML = "";
                    resultado2 = 0;
                }
            }
        }
        

        
        
    }

    
    
// function numAleatorio2() {
//     const x2 = Math.ceil(Math.random() * 6);
//     let resultadoAntiguo2 = resultado2;
//     resultado2 = resultado2 + x2;
//     console.log(x2)
//     console.log(resultado2);

//     if (resultado2 == 20) {
//         confirm('Has ganado');
//         document.querySelector(`#casillas1 #c0`).innerHTML = `<div id="j1" class="ficha jugador1"></div>`;
//         document.querySelector(`#casillas2 #c0`).innerHTML = `<div id="j2" class="ficha jugador2"></div>`;
//         document.querySelector(`#casillas1 #c${resultado}`).innerHTML = "";
//         resultado = 0;
//         resultado2 = 0;
//     }
//     if (resultado2 > 20) {
//         let sobra2=resultado2-20
//         resultado2=20-sobra2
        
//     }
    
//     document.querySelector(`#casillas2 #c${resultadoAntiguo2}`).innerHTML = ''
//     document.querySelector(`#casillas2 #c${resultado2}`).innerHTML = `<div id="j2" class="ficha jugador2"></div>`
    
// }





