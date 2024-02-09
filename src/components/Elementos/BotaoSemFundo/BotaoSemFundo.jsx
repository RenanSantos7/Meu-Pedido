import styles from './BotaoSemFundo.module.css'

export default function BotaoSemFundo({children, aoClicar}) {
    return (
        <button
            className={styles.botao}
            onClick={aoClicar}
        >
            {children}
        </button>
    )
}
