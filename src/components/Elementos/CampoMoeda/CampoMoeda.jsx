import { useEffect, useState } from 'react';
import styles from './CampoMoeda.module.css'

export default function CampoMoeda({
  obrigatorio = false,
  titulo,
  valor,
  setValor,
}) {

  const [valorExibido, setValorExibido] = useState('R$ 0,00')

  function aoMudar(evt) {
    let novoValor = evt.target.value;
    setValor(Number(novoValor));
  }

  useEffect(() => {
    const valorFormatado = valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    setValorExibido(valorFormatado)
  }, [valor])

  return (
    <div className={styles.campoContainer}>
      <span className={styles.label}>{titulo}</span>
      <label className={styles.campo}>
        <span className={styles.valor}>{valorExibido}</span>
        <input
          type='number'
          value={valor}
          onChange={aoMudar}
          className={styles.campoInput}
          required={obrigatorio}
        />
      </label>
    </div>
  )

}