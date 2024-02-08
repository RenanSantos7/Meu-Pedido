import styles from './CampoTexto.module.css'

export default function CampoTexto({
    titulo,
    placeholder,
    valor,
    setValor,
    padrao,
    tipo
}) {


    function aoMudar(evt) {
        let valorAtual = evt.target.value

        if (tipo === 'numero') {
            valorAtual = valorAtual.replace(/[^0-9,]/g, '')
        }

        setValor(valorAtual)
    }

    return (
        <label className={styles.campo}>
            <span className={styles.label}>{titulo}</span>
            <input
                type="text"
                placeholder={placeholder}
                value={valor}
                onChange={evt => aoMudar(evt)}
                pattern={padrao}
            />
        </label>
    )
}
