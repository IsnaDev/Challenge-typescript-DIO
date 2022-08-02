/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; */


// Primeira forma de resposta
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// Segunda forma de resposta
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// Outras formas de resposta
interface Funcionario { 
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}