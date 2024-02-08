import { useEffect, useState } from 'react'
import styles from './ModalAdd.module.css'
import localizarMoeda from '../../utils/localizarMoeda'
import CampoTexto from '../CampoTexto/CampoTexto'
import Botao from '../Botao/Botao'

export default function ModalAdd({ aberto, fechar }) {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState(0)

    return (
        <>
            <div
                className={styles.sombra}
                onClick={fechar}
            />

            <dialog
                className={styles.modal}
                open={aberto}
            >
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
                    placeholder='R$ 0,00'
                    valor={preco === 0 ? '' : localizarMoeda(preco)}
                    setValor={setPreco}
                    tipo='numero'
                />

                <div className={styles.botaoContainer}>
                    <Botao>Adicionar</Botao>
                </div>
            </dialog>
        </>
    )
}
