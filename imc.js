const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {
    let valorIMC = (peso / (altura * altura)).toFixed(1)

    let classificacao = ''

    if (valorIMC < 18.5) {
      classificacao = 'abaixo do peso.'
    }else if(valorIMC < 25){
      classificacao = 'peso ideal parabens!!!.'

    }else if(valorIMC < 30){
      classificacao = 'voce esta levimente acima do peso.'
    } else if(valorIMC < 35){
      classificacao = 'voce esta com obesidade grau 1.'
    } else if(valorIMC < 40){
      classificacao = 'voce esta com obesidade grau 2.'
    }else{
      classificacao = 'voce esta com obesidade grau 3. CUIDADO !!!.'
    }

    resultado.textContent = `${nome} o seu IMC é${valorIMC} e voce esta 
    ${classificacao}`
  } else {
    resultado.textContent = 'preencha todos os campos!!! '
  }
}

calcular.addEventListener('click', imc)
