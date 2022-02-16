
const  alunos = [
{
    nome: 'sofia',
    nota: 10 ,
    turma: '7a',
},
{
    nome: 'maria',
    nota: 5 ,
    turma: '8a',
},
{
    nome: 'sofia',
    nota: 0 ,
    turma: '7a',
}];

function listaAprovados (alunos, media) {

     let passou= [];
    
        for (let i = 0; i < alunos.length; i++) {
            let { nota, nome } = alunos[i];
    
            if (nota >= media) {
                passou.push(nome);
            }
       
    }

    return  passou;
}

console.log(listaAprovados(alunos,4 ));