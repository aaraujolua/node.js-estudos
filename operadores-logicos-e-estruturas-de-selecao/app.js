const readLine = require('readline').createInterface ({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai verificar se voce e maior de 18 anos e possui habilitacao para poder entrar no kart');
console.log('Alem dos seus dados, precisaremos verificar se seu nome está agendado');

readLine.question('Qual é o ano do seu nascimento?', ano => {
    if(ano > 2005){
        console.log('Voce nao possui a idade minima para participar');
    } else {
        readLine.question('Voce possui habilitacao? (Sim/Nao)', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('Voce nao possui habilitacao para dirigir o kart')
            } else {
                readLine.question('Qual e o seu nome?', nome => {
                    switch(nome) {
                        case 'Luana' :
                            console.log('Bem-vinda ao Kart, Luana :)');
                            break;
                        case 'Vitoria' :
                            console.log('Bem-vinda ao Kart, Vitoria :)');
                            break;
                        default :
                            console.log('Seu nome nao foi encontrado na lista de agendamentos :(');
                            break;
                    }
                });
            }
        }) 
    }
})
