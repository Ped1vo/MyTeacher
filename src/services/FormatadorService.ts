export const Formatadorservice = {
    valorMonetario(valor: number): string {
        return valor.toLocaleString('pt-br',{ minimumFractionDigits: 2, style: 'currency', currency: 'BRL'});
    },
    limitarTexto(texto: String, tamanhoMaximo: number): String {
        if (texto.length < tamanhoMaximo) {
            return texto;
        }
        return texto.slice(0,tamanhoMaximo) + '...';
    }
}