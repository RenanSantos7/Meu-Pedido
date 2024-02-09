import styles from './Botao.module.css'

export default function Botao({children, aoClicar}) {
    return (
        <button
            onClick={aoClicar}
            className={styles.botao}
        >
            {children}
        </button>
    )
}
