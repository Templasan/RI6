import * as readline from 'readline';
import Mensagens from './mensagens';
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Bhaskara from './bhaskara';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';

const mensagens = new Mensagens();

const operacoesMap = new Map<string, any>([
    ['Somar', Soma],
    ['Subtrair', Subtracao],
    ['Multiplicar', Multiplicacao],
    ['Dividir', Divisao],
    ['Elevar', Potenciacao],
    ['Raiz', Radiciacao],
    ['Bhaskara', Bhaskara]
]);

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const iniciar = () => {
    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
        const instrucoes = valor.trim().split(' ');
        const numero1 = Number(instrucoes[0]);
        const numero2 = Number(instrucoes[1]);
        let numero3 = 0;
        let operacao = instrucoes[instrucoes.length - 1];

        if (instrucoes.length === 1) {
            operacao = instrucoes[0];
        } else if (operacao === 'Bhaskara') {
            numero3 = Number(instrucoes[2]);
        }

        console.log(`Estas foram suas instruções: ${instrucoes}\n`);

        const OperacaoClasse = operacoesMap.get(operacao);

        if (OperacaoClasse) {
            const calculo = new OperacaoClasse();
            let resultado: number | string;

            if (operacao === 'Bhaskara') {
                resultado = calculo.calcular(numero1, numero2, numero3);
            } else {
                resultado = calculo.calcular(numero1, numero2);
            }

            console.log(`O resultado da operação é ${resultado}\n`);
        } else if (operacao === 'Sair') {
            console.log(`Até uma próxima, falou...`);
            leitor.close();  // Fecha a interface somente se for "Sair"
        } else {
            console.log(`Operação não entendida :(`);
        }

        if (operacao !== 'Sair') {
            mensagens.listarOpcoes();
            mensagens.comoUsar();
            iniciar();  // Chama a função novamente para continuar a interação
        }
    });
};

mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();