const readLine = require('readline').createInterface ({
    input : process.stdin,
    output : process.stdout
});

/* em vez de fazer dessa maneira, criarei uma função para as partes que se repetem *

readLine.question('Insira um numero: ', (numero1) => {
    try {
        const number = Number.parseFloat(numero1);
        readLine.question('Insira o segundo numero: ', (numero2) => {
            try {
                const number = Number.parseFloat(numero2)
            } catch(e) {
                console.log('O numero informado nao e valido');
            }
        })
    } catch(e) {
        console.log('O numero informado nao e valido');
    }
})
*/

const validarNumeroInformado = (numero) => {
    const resultado= Number.parseFloat(numero);   
    if(!resultado) {
        console.log('O numero informado nao e valido');
    }
    return resultado
}

const validarOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador invalido');
            return null;
    }
}

readLine.question('Insira um numero: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1) { 
        readLine.question('Insira o segundo numero: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2) {
                readLine.question('Insira o operador (+|-|*|/|%): ', (operador) => {
                    const operadorValidado = validarOperador(operador);

                    if(operadorValidado) {
                        switch(operadorValidado) {
                            case '+': console.log(`Resultado: ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`Resultado: ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*': console.log(`Resultado: ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/': console.log(`Resultado: ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%': console.log(`Resultado: ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default: break;
                        }
                    }
                })
            }




        })


    }
})
