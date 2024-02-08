import './App.css'
import localizarMoeda from './utils/localizarMoeda'
import logo from './assets/fast-food.png'
import { useEffect, useState } from 'react'
import Tabela from './components/Tabela/Tabela'
import BotaoFlutuante from './components/BotaoFlutuante/BotaoFlutuante'
import ModalAdd from './components/ModalAdd/ModalAdd'
import Checkbox from './components/Checkbox/CheckBox'

export default function App() {
    const [pedidos, setPedidos] = useState([])
    const [total, setTotal] = useState(0)
    const [dezPorCento, setDezPorCento] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)


    function calculaTotal(itens) {
        let totalParcial = 0
        itens.forEach(item => {
            const totalItem = item.qtd * item.preco
            totalParcial += totalItem
        })

        if (dezPorCento) {
            totalParcial = totalParcial * 1.1
        }

        setTotal(totalParcial)
    }

    useEffect(() => {
        calculaTotal(pedidos)
    }, [pedidos, dezPorCento])

    return (
        <div className='app'>
            <div className='titulo'>
                <h1>Meu Pedido</h1>
                <img src={logo} alt="Ícone de fastfood com um hamburguer e um pacote de batatas fritas. Fonte: Freepik" />
            </div>

            <div className='total'>
                <p className='legenda'>Valor total</p>
                <p className='valor-total'>{localizarMoeda(total)}</p>
            </div>

            <div className='dez-por-cento'>
                <Checkbox valor={dezPorCento} setValor={setDezPorCento} titulo='Calcular 10%' />
            </div>

            {pedidos.length > 0
                ? <Tabela itens={pedidos} />
                : <p className='explicacao'>Aperte no botão abaixo e adicione o primeiro pedido</p>
            }

            <BotaoFlutuante aoClicar={() => setModalAdd(true)} />

            {modalAdd &&
                <ModalAdd
                    aberto={modalAdd}
                    fechar={() => setModalAdd(false)}
                    setPedidos={setPedidos}
                />
            }
        </div>
    )
}
