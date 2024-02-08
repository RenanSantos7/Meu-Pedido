import styles from './Checkbox.module.css'

export default function Checkbox({ valor, setValor, titulo }) {
    return (
        <label className={styles.checkbox}>
            <div className={styles.indicador} />
            <input
                type='checkbox'
                onChange={() => setValor(!valor)}
                className={styles.input}
            />
            <span className={styles.label}>{titulo}</span>
        </label>
    )
}
