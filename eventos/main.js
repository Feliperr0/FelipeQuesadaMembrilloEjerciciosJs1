//Calculadora de IMC

// DOM
let button = document.getElementById('btn')
button.addEventListener('click', () => {
  const estatura = parseInt(document.getElementById('estatura').value)
  const peso = parseInt(document.getElementById('peso').value)
  const resultado = document.getElementById('output')
  let estaturaValor = false, pesoValor = false

  if (estatura === '' || isNaN(estatura) || (estatura <= 0)) {
    document.getElementById('estatura_error').innerHTML = 'Introduce un valor válido de estatura'
  } else {
    document.getElementById('estatura_error').innerHTML = ''
    estaturaValor = true
  }

  if (peso === '' || isNaN(peso) || (peso <= 0)) {
    document.getElementById('peso_error').innerHTML = 'Introduce un valor válido de peso'
  } else {
    document.getElementById('peso_error').innerHTML = ''
    pesoValor = true
  }

  //Calculo y mensajes de resultados
  if (estaturaValor && pesoValor) {
    const imc = (peso / ((estatura * estatura) / 10000)).toFixed(2)

    if (imc < 18.6) {
      resultado.innerHTML = 'Por debajo: ' + imc
    } else if (imc >= 18.6 && imc < 24.9) {
      resultado.innerHTML = 'Saludable: ' + imc
    } else if (imc >= 25 && imc < 30) {
      resultado.innerHTML = 'Sobrepeso: ' + imc
    } else if (imc >= 31 && imc < 34.9) {
      resultado.innerHTML = 'Obesidad I: ' + imc
    } else if (imc >= 35 && imc < 39.9) {
      resultado.innerHTML = 'Obesidad II: ' + imc

    } else {
      resultado.innerHTML = 'Obesidad III: ' + imc
    }
  } else {
    alert("El formulario tiene errores")
    resultado.innerHTML = ''
  }
})


//Conversor de monedas

let cantidadInput = document.getElementById('cantidad')
const monedaEntradaSelect = document.getElementById('monedaEntrada')
const monedaSalidaSelect = document.getElementById('monedaSalida')
const botonConvertir = document.getElementById('botonConvertir')
const resultadoInput = document.getElementById('resultadoInput')

botonConvertir.addEventListener('click', () => {
  let cantidad = parseFloat(cantidadInput.value)
  const monedaEntrada = monedaEntradaSelect.value
  const monedaSalida = monedaSalidaSelect.value

  const resultado = convertirMoneda(cantidad, monedaEntrada, monedaSalida)
  resultadoInput.value = resultado;
})

function convertirMoneda(cantidad, monedaEntrada, monedaSalida) {
  const tasaCambio = 17.62 // Tasa de cambio actual

  let resultado

  if (monedaEntrada === 'USD' && monedaSalida === 'MXN') {
    resultado = cantidad * tasaCambio
  } else if (monedaEntrada === 'MXN' && monedaSalida === 'USD') {
    resultado = cantidad / tasaCambio
  } else {
    resultado = cantidad 
  }

  return resultado.toFixed(2)
}




