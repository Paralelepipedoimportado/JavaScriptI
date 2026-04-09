const livros = require("./livroslegais");

let atual = 0;
let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    // código maneirão ein
    if (livros[atual] < livros[maisBarato]) {
        maisBarato = atual
    }
}


const livrosOrdenados = livros.slice().sort((a, b) => b.preco - a.preco);

console.log('Livrassos do mais Pro (caro) para o mais Noob(barato):');
livrosOrdenados.forEach((livro, index) => {
    console.log(`${index + 1}. ${livro.titulo} - R$ ${livro.preco.toFixed(2)}`);
});

console.log (`----------------`)
console.log(`o livro mais poggers de preço salientemente barato custa ${livros[maisBarato].preco} e o título dessa pindamonhangaba é ${livros[maisBarato].titulo}`);
console.log(`trabalho feito por Benício cabeludo maneiro`);