import styles from './CampoFormulario.module.css'

export default function CampoFormulario({
    titulo,
    placeholder,
    valor,
    setValor,
    padrao,
    tipo,
}) {

    function aoMudar(alvo) {
        let valorAtual = alvo

        if (tipo === 'numero') {
            valorAtual = valorAtual
                .replace(/[^0-9,]/g, '')
                .replace(',', '.')
            
            setValor(Number(valorAtual))
        } else {
            setValor(valorAtual)
        }
        
    }

    return (
        <label className={styles.campo}>
            <span className={styles.label}>{titulo}</span>
            <input
                placeholder={placeholder}
                value={valor}
                onChange={evt => aoMudar(evt.target.value)}
                pattern={padrao}
                required={true}
                type={tipo === 'numero' ? 'number' : 'text'}
            />
        </label>
    )

}