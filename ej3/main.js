// console.log('hola')

// capturamos el boton...

const boton = document.querySelector('#boton')

//capturamos el click
const vector =[]

boton.addEventListener('click', enviar);

//creamos funcion para que se ponga en la carta
function enviar(event){
    event.preventDefault()
    // capturo el elemento imput NOMBRE
    const nombre = document.querySelector('#nombre')
    // capturo el valor
    const valorNombre = nombre.value
    console.log(valorNombre)
    

    // capturo el elemento imput Apellido
    const apellido = document.querySelector('#apellido')
    // capturo el valor
    const valorApellido = apellido.value
    console.log(valorApellido)

    // capturo el elemento imput Apellido2
    const apellido2 = document.querySelector('#apellido2')
    // capturo el valor
    const valorApellido2 = apellido2.value
    console.log(valorApellido2)

    // capturo el elemento imput dni
    const dni = document.querySelector('#dni')
    // capturo el valor
    const valorDni = dni.value
    console.log(valorDni)

    // capturo el elemento imput url
    const url = document.querySelector('#url')
    // capturo el valor
    const valorUrl = url.value
    console.log(valorUrl)
    
    // CREO EL RESULTADO
    const nombreCompleto = valorNombre +" " + valorApellido + " " + valorApellido2
    console.log(nombreCompleto) 

    // creo para insertar imagen
   
    const imagen = document.querySelector('#divImagen')
    let valorImagen= `<img width="545" height="600" src="${valorUrl}" alt="imagen">`
    imagen.innerHTML=valorImagen
    

    // creo para insertar nombre apellido...
    const nombreCompletoResultado = document.querySelector('#nombreCompleto')
    nombreCompletoResultado.innerHTML=`<span>${nombreCompleto}</span>`
    // creo para insertar dni
    const resultadoDni = document.querySelector('#resultadoDni')
    resultadoDni.innerHTML=`<span>${valorDni}</span>`

    const arrayTabla=(
   
    {
        valorNombre,
        valorApellido2,
        valorApellido,
        valorUrl,
        valorDni
    }
    )
    vector.push(arrayTabla)

        let carta= ``
        vector.forEach((element,index) => {
            carta+= `<tr>
            <td>${index+1}</td>
            <td><img width="30" src="${element.valorUrl}"></td>
            <td>${element.valorNombre}</td>
            <td>${element.valorApellido} ${element.valorApellido2}</td>
            <td>${element.valorDni}</td>
            </tr>`
        });
        document.querySelector('#cartas').innerHTML=carta


}