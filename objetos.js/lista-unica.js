const clientes = [
    { 
    nome: "André",
    cpf: "12312312345",
    dependentes: [{
        nome: "Sara",
        parentestco: "filha",
        dataNasc: "20/o3/2011"
        },
        { 
         nome: "Samia",
         parentesco: "filha",
         dataNasc: "04/01/2014"
        }], 
    }, 

        {
        nome: "Juliana",
        cpf: "52726272627",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].
dependentes, ...clientes[1].dependentes]

console.table(listaDependentes);