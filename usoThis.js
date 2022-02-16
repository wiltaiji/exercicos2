



function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
    
}
const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};
 const pessoa2 ={

    nome: 'jose' ,
    idade: 38,
 };

console.log( calculaIdade.call(pessoa2,40 ))
console.log( calculaIdade.apply(pessoa1,[20] ))