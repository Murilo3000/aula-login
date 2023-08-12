//let chave = "chave"
//sessionStorage.setItem(chave, "Valor novo");

//let lerChave = sessionStorage.getItem(chave);
//console.log(lerChave);

//apaga item
//localStorage.removeItem(chave)
//apaga tudo
//localStorage.clear()

//let array=[1,2,3,4,5]
//localStorage.setItem(array,JSON.stringify(array))

//objeto
//let dados ={nome: "Fiap", telefone:"(11) 91111-1111"}
//localStorage.setItem("info", JSON.stringify(dados))

//criar a lista de usuários
//let listaDados =[];

//criando a base (construtor)
//function Campos(campo1){
//    this.campo1 = campo1
//}

//disparar o botão
//const btnEnviar = document.querySelector("#btnSubmit")

//evento clique
//btnEnviar.addEventListener('click', ()=>{
    //const inputCampo1= document.querySelector("#campo1")

    //Instanciando o construtor
    //let info= new Campos(inputCampo1.value);

    //lista de usuario recebendo objeto
    //listaDados.push(info)
    //armazenando a lista de usuários
    //localStorage.setItem("dados", JSON.stringify(listaDados))
//})

//atividade
//criar a lista de usuários
let listaDados =[];

//criando a base (construtor)
function Campos(email,nome,senha){
    this.email = email
    this.nome = nome
    this.senha = senha
}

//disparar o botão
const btnEnviar = document.querySelector("#btnSubmit")

//evento clique
btnEnviar.addEventListener('click', ()=>{
    const inputemail= document.querySelector("#email")
    const inputnome= document.querySelector("#nome")
    const inputsenha= document.querySelector("#senha")

    let info= new Campos(inputemail.value,inputnome.value,inputsenha.value);
    listaDados.push(info)

    localStorage.setItem("dados", JSON.stringify(listaDados))
})