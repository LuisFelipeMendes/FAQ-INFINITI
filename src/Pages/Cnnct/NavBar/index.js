import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import styles from './styles.module.css'
import { FaBars } from 'react-icons/fa'
import { Constants } from '../Constants'


export default function Navbar() {

const [showNavbar, setShowNavBar] = useState(false)
const toggleNavBar = () => {setShowNavBar(!showNavbar)
}


    return (
        <section className={styles['container']}>
            <div className={styles['left-cont']}>
                <img className={styles['logo']} src={Logo} />
                    <FaBars 
                    className={styles['nav-btn']} 
                    onClick={toggleNavBar}
                    style={showNavbar ? {transform: 'rotateZ(-90deg)'} : {}}
                    />
            </div>
            <div className={styles['right-cont']}>
                <a href={Constants.links.pedirChip} target='_blank' className={styles['button']}>Pedir chip</a>
            </div>
        </section>
    )
}
