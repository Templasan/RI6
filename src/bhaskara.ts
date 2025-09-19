export default class Bhaskara {
    public calcular(a: number, b: number, c: number): string {
        const delta = b ** 2 - 4 * a * c;
        if (delta < 0) return "Delta é negativo, não há raízes reais.";

        const raizDelta = Math.sqrt(delta);
        const denominador = 2 * a;

        const x1 = (-b + raizDelta) / denominador;
        const x2 = (-b - raizDelta) / denominador;

        return `\nX' = ${x1}\nX" = ${x2}`;
    }
}
