import { useEffect, useState } from 'react'
import styles from './CampoTexto.module.css'
import localizarMoeda from '../../utils/localizarMoeda'

export default function CampoTexto({
    titulo,
    placeholder,
    valor,
    setValor,
    padrao,
    tipo
}) {

    function aoMudar(alvo) {
        let valorAtual = alvo

        if (tipo === 'numero') {
            valorAtual = valorAtual
                .replace(/[^0-9,]/g, '')
                .replace(',', '.')
        }
        
        setValor(valorAtual)
    }

    return (
        <label className={styles.campo}>
            <span className={styles.label}>{titulo}</span>
            <input
                placeholder={placeholder}
                value={valor}
                onChange={evt => aoMudar(evt.target.value)}
                pattern={padrao}
            />
        </label>
    )

}