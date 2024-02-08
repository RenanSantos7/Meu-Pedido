import styles from './Tabela.module.css'
import localizarMoeda from '../../utils/localizarMoeda'

export default function Tabela({itens}) {

    return (
        <div className={styles.tabelaContainer}>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th className={styles.col1}>Item</th>
                        <th className={styles.col2}>Qt</th>
                        <th className={styles.col3}>Valor Und</th>
                    </tr>
                </thead>
    
                <tbody>
                    {itens.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.col1}>{item.nome}</td>
                            <td className={styles.col2}>{item.qtd}</td>
                            <td className={styles.col3}>{localizarMoeda(Number(item.preco))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
