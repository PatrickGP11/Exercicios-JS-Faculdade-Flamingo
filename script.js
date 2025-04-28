const Divcontainer = document.querySelector(".container")

const btns = [
    {
        nome: "Soma",
        func: soma
    },

    {
        nome: "Divisão",
        func: divisao
    },

    {
        nome: "Subtração",
        func: subtracao
    },

    {
        nome: "Multiplicação",
        func: multiplicacao
    },

    {
        nome: "IMC",
        func: imc
    },
]

function soma() {
    alert("Soma")
}

function divisao() {
    alert("Divisão")

}

function multiplicacao() {
    alert("Multiplicação")

}

function subtracao() {
    alert("Subtração")

}

function imc() {
  const peso = Number(prompt("Digite seu peso"))
  const altura = Number(prompt("Digite sua altura"))
}

btns.forEach((btn) =>{
    const btnExercicio = document.createElement("button")
    btnExercicio.textContent = btn.nome
    btnExercicio.addEventListener("click", btn.func)

    Divcontainer.appendChild(btnExercicio)
})