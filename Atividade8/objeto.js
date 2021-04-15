const RA = () => Math.random().toString(36).slice(2);
const nome = 'Bruno Henrique Dias Gaya';

const aluno1 = {
    nome,
    RA: RA(),
};

const aluno2 = new Object();
aluno2.nome = nome;
aluno2.RA = RA();

const aluno3 = Object.create({});
aluno3.nome = nome;
aluno3.RA = RA();

const alunos = [aluno1, aluno2, aluno3];
alunos.forEach((aluno, index) => document.write(`<li>aluno${++index}: ${JSON.stringify(aluno)}</li>`));