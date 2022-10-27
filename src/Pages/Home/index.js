import { React, useState } from 'react'
import Logo from '../../assets/logolight.png'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'


export default function Home() {

  const [telaEscondida, setTelaEscondida] = useState(0);

  return (
    <>
      <section
        className={styles['error']}
        onClick={() => { setTelaEscondida(telaEscondida + 1) }}
      >
        <span>Error 404!</span>
        <span>Not Found</span>
        {telaEscondida >= 5 &&
          <section className={styles['container-bloco']}>
            <div className={styles['header']}>
              <img src={Logo} alt="logo" className={styles['logo']} />
              <span className={styles['header-title']}>FAQ</span>
            </div>
            <span className={styles['title']}>
              Clique nos links abaixo para ir ao FAQ do parceirto desejado
            </span>
            <div className={styles['bloco-cont']}>
              <div className={styles['bloco']}>
                <Link className={styles['link']} to='/infiniti' target='_blank'>Inifiniti</Link>
                <Link className={styles['link']} to='/IconNext' target='_blank'>IconNext</Link>
                <Link className={styles['link']} to='/Agil' target='_blank'>Agil</Link>
                <Link className={styles['link']} to='/Aiva' target='_blank'>Aiva</Link>
                <Link className={styles['link']} to='/Amassteo' target='_blank'>Amassteo</Link>
              </div>
              <div className={styles['bloco']}>
                <Link className={styles['link']} to='/Camoa' target='_blank'>Camoa</Link>
                <Link className={styles['link']} to='/Cnnct' target='_blank'>Cnnct</Link>
                <Link className={styles['link']} to='/Cnx' target='_blank'>Cnx</Link>
                <Link className={styles['link']} to='/Completa' target='_blank'>Completa</Link>
                <Link className={styles['link']} to='/ConectaIP' target='_blank'>ConectaIP</Link>
              </div>
              <div className={styles['bloco']}>
                <Link className={styles['link']} to='/Digi' target='_blank'>Digi</Link>
                <Link className={styles['link']} to='/Fnet' target='_blank'>Fnet</Link>
                <Link className={styles['link']} to='/GenteTelecom' target='_blank'>GenteTelecom</Link>
                <Link className={styles['link']} to='/Guaptel' target='_blank'>Guaptel</Link>
                <Link className={styles['link']} to='/Gx' target='_blank'>Gx</Link>
              </div>
              <div className={styles['bloco']}>
                <Link className={styles['link']} to='/Heaven' target='_blank'>Heaven</Link>
                <Link className={styles['link']} to='/Hns' target='_blank'>Hns</Link>
                <Link className={styles['link']} to='/IndaiaFibra' target='_blank'>IndaiaFibra</Link>
                <Link className={styles['link']} to='/InterPop' target='_blank'>InterPop</Link>
                <Link className={styles['link']} to='/Lignet' target='_blank'>Lignet</Link>
              </div>
              <div className={styles['bloco']}>
                <Link className={styles['link']} to='/LinkWap' target='_blank'>LinkWap</Link>
                <Link className={styles['link']} to='/LtMovel' target='_blank'>LtMovel</Link>
                <Link className={styles['link']} to='/LtTelecom' target='_blank'>LtTelecom</Link>
                <Link className={styles['link']} to='/Mck' target='_blank'>Mck</Link>
                <Link className={styles['link']} to='/NiqTurbo' target='_blank'>NiqTurbo</Link>
              </div>
              <div className={styles['bloco']}>
                <Link className={styles['link']} to='/Ntmovel' target='_blank'>Ntmovel</Link>
                <Link className={styles['link']} to='/OAC' target='_blank'>OAC</Link>
                <Link className={styles['link']} to='/Online' target='_blank'>Online</Link>
                <Link className={styles['link']} to='/PowerTurbo' target='_blank'>PowerTurbo</Link>
                <Link className={styles['link']} to='/Se77e' target='_blank'>Se77e</Link>
              </div>
              <div className={styles['bloco']}>
                <Link className={styles['link']} to='/UaiSat' target='_blank'>UaiSat</Link>
                <Link className={styles['link']} to='/Ubernet' target='_blank'>Ubernet</Link>
                <Link className={styles['link']} to='/ViaMovel' target='_blank'>ViaMovel</Link>
                <Link className={styles['link']} to='/West' target='_blank'>West</Link>
                <Link className={styles['link']} to='/Avanti' target='_blank'>Avanti</Link>
              </div>
              <div className={styles['bloco']}>
                <Link className={styles['link']} to='/Avatel' target='_blank'>Avatel</Link>
                <Link className={styles['link']} to='/Plus' target='_blank'>Plus</Link>
                <Link className={styles['link']} to='/Techy' target='_blank'>Techy</Link>
              </div>
            </div>
          </section>
        }
      </section>
    </>

  )
}

