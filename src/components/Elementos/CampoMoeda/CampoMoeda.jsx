import styles from './CampoMoeda.module.css'
import CurrencyInput from 'react-currency-input-field'

export default function CampoMoeda({
    titulo,
    placeholder,
    valor,
    setValor,
    padrao,
    tipo
}) {
    
    function aoPerderFoco(value) {
        let valorConvertido = value.replace(',', '.')
        valorConvertido = valorConvertido.replace(/R\$\s/, '')
        setValor(valorConvertido)
    }

    return (
        <label className={styles.campo}>
            <span className={styles.label}>{titulo}</span>
            <CurrencyInput
                placeholder='R$ 0,00'
                disableGroupSeparators={true}
                decimalScale={2}
                intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                onBlur={evt => aoPerderFoco(evt.target.value)}
            />
        </label>
    )

}