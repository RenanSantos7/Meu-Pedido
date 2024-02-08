import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './BotaoFlutuante.module.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function BotaoFlutuante({aoClicar}) {
    return (
        <button
            className={styles.botaoFlutuante}
            onClick={aoClicar}
        >
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}
