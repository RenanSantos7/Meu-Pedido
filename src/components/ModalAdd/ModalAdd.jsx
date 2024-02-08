import { useEffect, useState } from 'react'
import styles from './ModalAdd.module.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import Botao from '../Botao/Botao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function ModalAdd({ aberto, fechar, setPedidos }) {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState(0)
    const [qtd, setQtd] = useState(0)

    function addPedido() {
        const novoPedido = {
            nome: nome,
            preco: preco,
            qtd: qtd
        }

        setPedidos(prev => [...prev, novoPedido])

        setNome('')
        setPreco(0)
        setQtd(0)
    }

    return (
        <>
            <div
                className={styles.sombra}
                onClick={fechar}
            />

            <dialog
                className={styles.modal}
                // open={aberto}
                open={true}
            >
                <button className={styles.botaoFechar} onClick={fechar}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <h2 className={styles.titulo}>Acrescente um pedido</h2>

                <CampoTexto
                    key='nome'
                    titulo='Nome' 
                    placeholder='O nome do produto'
                    valor={nome}
                    setValor={setNome}
                />

                <CampoTexto
                    key='preco'
                    titulo='Preço'
                    valor={preco}
                    setValor={setPreco}
                    tipo='moeda'
                />

                <CampoTexto
                    key='qtd'
                    titulo='Quantidade'
                    valor={qtd}
                    setValor={setQtd}
                    tipo='numero'
                />

                <div className={styles.botaoContainer}>
                    <Botao
                        aoClicar={addPedido}
                    >Adicionar</Botao>
                </div>
            </dialog>
        </>
    )
}
