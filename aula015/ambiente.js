// Variáveis compostas

let num = [5, 8, 2, 9, 3];
// Insere novo elemento no array:
num.push(7);
// Comprimento do vetor:
//num.length;
// Ordena em ordem crescente:
num.sort();
// Procura o valor do índice dado:
// valores.indexOf(n);

console.log(`Nosso vetor é o [${num}].`);
console.log(`Nosso vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}.`); // Índice do vetor.
let pos = num.indexOf(8);
// -1 significa que o valor não foi encontrado.
if (pos == -1) {
  console.log("O valor não foi encontrado.");
} else {
  console.log(`O valor está na posição ${pos}.`);
}
