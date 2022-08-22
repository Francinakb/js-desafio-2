const sumar = function (numero1, numero2){           
    return numero1 + numero2
}

const restar = function (numero1, numero2){        
    return numero1 - numero2
}

const multiplicar = function (numero1, numero2){         
    return numero1 * numero2
}

const dividir = function (numero1, numero2){          
    return numero1 / numero2
}

let numero1, numero2, operacion

do{
    numero1 = parseFloat (prompt("Ingrese un numero"))
    numero2 = parseFloat (prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion")

    if(isNaN(numero1) || isNaN(numero2)){
        alert ("Ingresar numero validos")
    }
    if(numero2 === 0 && operacion === "/"){
        alert ("No se puede dividir con 0")
    }
}while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion === "/"))         

switch(operacion){
    case "+":
    alert(sumar(numero1, numero2))
    break
    case "-":
    alert(restar(numero1, numero2))
    break
    case "*":
    alert(multiplicar(numero1, numero2))
    break
    case "/":
    alert(dividir(numero1, numero2))
    break
    default:
    alert("No se puede realizar esta operacion")
    break
}