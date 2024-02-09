import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './BotaoFlutuante.module.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { PedidosContext } from '../../../context/PedidosContext'

export default function BotaoFlutuante() {

    const {setModalAdd} = useContext(PedidosContext)

    return (
        <button
            className={styles.botaoFlutuante}
            onClick={() => setModalAdd(true)}
        >
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}
