// Código refatorado após o desafio, validando o maior número válido

const valorDigitado = 7;

const tamanhoMaximo = 4;

const totalValido = 21;

const numeroValido = [];

function validaMaiorNumeroValido(input, valorMaximo) {
  let valorMaximoEmArray = [];
  let calc = valorMaximo;

  for (let i = 0; i < tamanhoMaximo; i++) {
    if (calc >= input) {
      valorMaximoEmArray.push(input);
      calc -= input;
    } else if (calc === input) {
      valorMaximoEmArray.push(calc - 1);
      calc -= calc - 1;
    } else if (calc < input && calc > 0) {
      valorMaximoEmArray.push(calc);
      calc -= calc;
    } else if (calc === 0) {
      valorMaximoEmArray.push(0);
    }
  }
  console.log(
    "Maior valor em int",
    parseInt(valorMaximoEmArray.toString().toString().replaceAll(",", ""))
  );
  console.log("Maior valor em array", valorMaximoEmArray);

  return parseInt(valorMaximoEmArray.toString().replaceAll(",", ""));
}

const converterParaString = (valor) => {
  let arrString = valor.toString().padStart(tamanhoMaximo, "0");

  return arrString;
};

const validaNumero = (valor) => {
  let arrString = valor.toString().split("");

  for (let i = 0; i < arrString.length; i++) {
    if (parseInt(arrString[i]) > valorDigitado) {
      return false;
    }
  }

  let total = arrString.reduce(
    (acumulador, valorAtual) => acumulador + parseInt(valorAtual),
    0
  );

  return total === totalValido;
};

const valorMaximo = validaMaiorNumeroValido(valorDigitado, totalValido);

for (let index = 0; index <= valorMaximo; index++) {
  if (validaNumero(index)) {
    numeroValido.push(converterParaString(index));
  }
}

console.log(numeroValido);
console.log(numeroValido.length);
