const pessoas = [
    {
        nome: "Pedro",
        idade: 21,
        profissao: "Estudante"
    },
    {
        nome: "Joao",
        idade: 28,
        profissao: "Bêbado"
    },
    {
        nome: "Paulo",
        idade: 32,
        profissao: "Jogador"
    },{
        nome: "Thiago",
        idade: 666,
        profissao: "Pastor"
    }
];   

pessoas.forEach((objeto) => {
    if(objeto.nome != "Thiago"){
        console.log(objeto)
    }
});
