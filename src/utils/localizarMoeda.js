export default function localizarMoeda(num) {
    return num.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
}