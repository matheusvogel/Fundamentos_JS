const cliente = {
    nome:"André",
    idade:36,
    cpf:"125268275",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cfp", "email"]

// console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente["conta"]);