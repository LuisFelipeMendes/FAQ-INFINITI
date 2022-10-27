import React from 'react'
import { Constants } from '../Constants'
import styles from './styles.module.css'

export default function Duvidas() {
  return (
    <section className={styles['container']}>
      <div className={styles['duvida-cont']}>
        <span className={styles['title']}>Ficou mais alguma dúvida?</span>
        <span className={styles['subtitle']}> Entre em contato cnosno por email ou whatsapp!</span>
        <div className={styles['btn-cont']}>
          <button className={styles['btn']}>
            Email
          </button>
          <a  href={Constants.links.wpp} target='_blank' className={styles['btn']}>
            WhatsApp
          </a>
        </div>

      </div>
      <div className={styles['pedir-cont']}>
        <span className={styles['title']}>Finalmente uma operadora pra você amar.</span>
        <span className={styles['subtitle-pedir']}>Peça seu chip {Constants.texts.nomeEmpresa} em menos de 10 minutos e viva</span>
        <span className={styles['subtitle-pedir']}>a experiência que vc sempre quis:</span>
        <a href={Constants.links.pedirChip}  target='_blank' className={styles['btn-pedir']}>Pedir chip</a>
      </div>
    </section>
  )
}
