/**
 * APP Health Calc
 * Calculadora de métricas de saúde
 * @author Professor José de Assis
 * @version 1.0
 * @link https://github.com/professorjosedeassis/health
 */

// variáveis
let peso, altura, imc, idade, fcm, litros, get

function calcular() {
    //captura das variáveis idade, peso e altura
    idade = frmHealth.txtIdade.value
    peso = frmHealth.txtPeso.value
    altura = (frmHealth.txtAltura.value) / 100 //converter cm em m
    //validação de campos obrigatórios(todos)
    if (frmHealth.txtIdade.value === "") {
        alert("Preencha a sua idade")
        frmHealth.txtIdade.focus()
    } else if (frmHealth.txtPeso.value === "") {
        alert("Informe o seu peso")
        frmHealth.txtPeso.focus()
    } else if (frmHealth.txtAltura.value === "") {
        alert("Informe a sua altura em centímetros")
        frmHealth.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o sexo")
    } else if (frmHealth.nivel.value === "") {
        alert("Selecione o nível de atividade")
    } else {
        // lógica principal
        // Cálculo do IMC
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = `IMC: ${imc.toFixed(2)}`
        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "img/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Sobrepeso"
            document.getElementById("grafico").src = "img/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade grau I"
            document.getElementById("grafico").src = "img/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade grau II"
            document.getElementById("grafico").src = "img/obesidade2.png"
        } else {
            document.getElementById("status").innerHTML = "Obesidade extrema"
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"
        }
        // FCM
        fcm = 208 - (0.7 * idade)
        document.getElementById("freq").innerHTML = fcm
        // consumo de água
        litros = (peso * 35) / 1000
        document.getElementById("agua").innerHTML = `${litros.toFixed(1)} litros/dia`
    }
}

function limpar() {

}