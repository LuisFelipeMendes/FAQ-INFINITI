import React from 'react'
import Logo from '../Assets/logo.png'
import styles from './styles.module.css'
import { Constants } from '../Constants'


export default function Footer() {
    return (
        <section className={styles['container']}>
            <div className={styles['logo-cont']}>
                <img className={styles['logo']} src={Logo} />
            </div>
            <div className={styles['bloco']}>
                <ul className={styles['lista-cont']}>
                    <li className={styles['item-lista']}>Mapa de Cobertura</li>
                    <li className={styles['item-lista']}>FAQ</li>
                    <li className={styles['item-lista']}>Carreiras</li>
                </ul>
            </div>
            <div className={styles['bloco']}>
                <ul className={styles['lista-cont']}>
                    <li className={styles['item-lista']}>
                        <a href={Constants.links.termosUso} target='_blank'>Termos de uso</a>
                    </li>
                    <li className={styles['item-lista']}>
                       <a href={Constants.links.politicaPrivacidade} target='_blank'>Politica de Privacidade</a> 
                    </li>
                </ul>
            </div>
        </section>
    )
}
