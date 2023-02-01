console.log("Scrip conectado exitosamente");

const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

// btnCalcular.addEventListener('click', CalcularFun)

function CalcularFun(){
    const operador = txtOperador.value 
    const op1 = parseFloat(txtOp1.value) 
    const op2 = parseFloat(txtOp2.value) 
    
    if( (operador == "+" || operador == "-"  || operador == "*" || operador == "/" ) && !isNaN(op1) && !isNaN(op2) ) {
        let resultado
        switch(operador){
            case "+": 
            resultado = op1 + op2
            break
            case "-": 
            resultado = op1 - op2
            break
            case "*": 
            resultado = op1 * op2
            break
            case "/": 
            resultado = op1 / op2
            break
                        
        }
        pResultado.style = "color:black"
        pResultado.innerText = "Calculo posible - Resultado : " + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    }
    console.log(operador);
}

//txtOp1, txtOperador, txtOp2x