const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
    throw new Error(chalk.red (erro.code , 'não temos arquivos para ler'));
}

async function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
    console.log(chalk.green(texto))
   }catch(erro){
    trataErro(erro);
  }
}
/*
function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, enconding)
    .then((texto) => console.log(chalk.green(texto))
    .catch((erro) => trataErro(erro))  
}
*/
pegaArquivo('./arquivos/texto1.md');