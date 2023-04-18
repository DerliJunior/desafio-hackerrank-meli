// Código elaborado dentro do tempo

const input = 8;

const valorMaximo = 21;

const combinacoes = [];

const converterParaString = (valor) => {
  let arrString = valor.toString().padStart(4, "0");

  return arrString;
};

const validaNumero = (valor) => {
  let arrString = valor.toString().padStart(4, "0").split("");

  for (let i = 0; i < arrString.length; i++) {
    if (parseInt(arrString[i]) > input) {
      return false;
    }
  }

  let total = arrString.reduce(
    (acumulador, valorAtual) => acumulador + parseInt(valorAtual),
    0
  );

  return total === valorMaximo;
};

for (let index = 0; index < 9999; index++) {
  if (validaNumero(index)) {
    combinacoes.push(converterParaString(index));
  }
}

console.log(combinacoes);