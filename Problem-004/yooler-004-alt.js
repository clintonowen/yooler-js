let a = b = izquierda = derecha = res = '',
  palindromo = numero = 0

for (let i = 1; i <= 9999; i++) {
  for (let j = 1; j <= 9999; j++) {
    res = '' + i * j;
    if (res.length % 2 == 0) {
      for (let k = 0; k < res.length / 2; k++) {
        izquierda += res[k];
      }
      for (let k = res.length - 1; k >= res.length / 2; k--) {
        derecha += res[k];
      }

      numero = parseInt(res);

      if (izquierda == derecha) {
        if (numero > palindromo) {
          palindromo = numero;
        }
      }
    }
    izquierda = ''
    derecha = ''
  }
}

console.log(palindromo);