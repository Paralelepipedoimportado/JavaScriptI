const livros = require('./livroslegais');


const livrosOrdenados = livros.slice().sort((a, b) => a.preco - b.preco);

console.log('Livros do mais caro para o mais barato:');
livrosOrdenados.forEach((livro, index) => {
    console.log(`${index + 1}. ${livro.titulo} - R$ ${livro.preco.toFixed(2)}`);
});