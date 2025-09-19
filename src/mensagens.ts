export default class Mensagens {

    public listarOpcoes(): void {
        console.log(`Aqui você pode:`);
        console.log(`Somar, Subtrair, Dividir, Multiplicar, Elevar, Raiz, Bhaskara com números\n`);
    }

    public comoUsar(): void {
        console.log(`Para usar, digite os números e a opção de cálculo separados por espaço, como: "1.5 2.5 Somar"`);
        console.log(`O resultado será a soma dos números: 4`);
        console.log(`Para encerrar, digite "Sair"\n`);
    }

    public boasVindas(): void {
        console.log('\nBem-vindo à calculadora polimórfica\n');
    }
}
