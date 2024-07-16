array = ["a","b","c","b"];

const find = array.find((elemento) => elemento === "c"); // Retorna a primeira ocorrencia da verdadeira da comparação
const findIndex = array.findIndex((elemento) =>  elemento === "c"); // Retorna o Index da primeira ocorrencia da comparação
const indexOf = array.indexOf("c"); // Retorna o Index do elemento do argumento, caso não exista, retorna -1
const some = array.some((elemento) => elemento === "c"); // Retorna true se algum dos valores satisfaça a comparação
const every = array.every((elemento) => elemento === "c"); // Retorna true se todos elementos safisfaçam a comparação
const includes = array.includes("c"); // Retorna True se o elemento pertence ao array

console.log(`Find(c): ${find}`);
console.log(`FindIndex(c): ${findIndex}`);
console.log(`IndexOf(c): ${indexOf}`);
console.log(`Some(c): ${some}`);
console.log(`Every(c): ${every}`);
console.log(`Includes(c): ${includes}`);

const nomeCompleto = (a, b) => {
    return a + " " + b;
} 

console.log(nomeCompleto("Pedro", "Santos"))