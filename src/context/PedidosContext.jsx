import { createContext, useEffect, useState } from "react"
import ehObjetoVazio from "../utils/verificaObjetoVazio";

export const PedidosContext = createContext();
PedidosContext.displayName = "Meus Pedidos"

export const PedidosProvider = ({ children }) => {
    const [pedidos, setPedidos] = useState(carregarDoLocalStorage('pedidos') || [])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState(0)
    const [qtd, setQtd] = useState(0)
    const [modalAdd, setModalAdd] = useState(false)

    function adicionarPedido() {
        const novoPedido = {
            nome: nome,
            preco: preco,
            qtd: qtd
        }

        const pedidoIgual = pedidos.find(item => (
            item.nome === novoPedido.nome
            &&
            item.preco === novoPedido.preco
        ))

        if (ehObjetoVazio(pedidoIgual)) {
            setPedidos(prev => [...prev, novoPedido])
        } else {
            pedidoIgual.qtd += novoPedido.qtd
            setPedidos([...pedidos])
        }

        setNome('')
        setPreco(0)
        setQtd(0)
    }

    function salvarNoLocalStorage(chave, valor) {
        const valorJson = JSON.stringify(valor);
        localStorage.setItem(chave, valorJson);
    }
    
    function carregarDoLocalStorage(chave) {
        const valorJson = localStorage.getItem(chave);
        return JSON.parse(valorJson);
    }

    useEffect(() => {
        salvarNoLocalStorage('pedidos', pedidos)
    },[pedidos])

    return (
        <PedidosContext.Provider value={{
            pedidos, setPedidos,
            nome, setNome,
            preco, setPreco,
            qtd, setQtd,
            modalAdd, setModalAdd,
            adicionarPedido
          }}>
            {children}
        </PedidosContext.Provider>
    )
}