import styles from './ModalAdd.module.css'
import { useContext, useEffect, useState } from 'react'
import CampoFormulario from '../Elementos/CampoFormulario/CampoFormulario'
import Botao from '../Elementos/Botao/Botao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { PedidosContext } from '../../context/PedidosContext'
import CampoMoeda from '../Elementos/CampoMoeda/CampoMoeda'

export default function ModalAdd() {

    const {
        nome, setNome,
        preco, setPreco,
        qtd, setQtd,
        modalAdd, setModalAdd,
        adicionarPedido
    } = useContext(PedidosContext)

    function fechar() {
        setModalAdd(false)
    }

    return (
        <>
            <div
                className={styles.sombra}
                onClick={fechar}
            />

            <dialog
                className={styles.modal}
                open={modalAdd}
            >
                <button className={styles.botaoFechar} onClick={fechar}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <h2 className={styles.titulo}>Acrescente um pedido</h2>

                <CampoFormulario
                    key='nome'
                    titulo='Nome'
                    placeholder='O nome do produto'
                    valor={nome}
                    setValor={setNome}
                />

                <CampoMoeda
                    key='preco'
                    titulo='Preço'
                    valor={preco}
                    setValor={setPreco}
                />

                <CampoFormulario
                    key='qtd'
                    titulo='Quantidade'
                    valor={qtd}
                    setValor={setQtd}
                    tipo='numero'
                />

                <div className={styles.botaoContainer}>
                    <Botao
                        aoClicar={adicionarPedido}
                    >Adicionar</Botao>
                </div>
            </dialog>
        </>
    )
}
