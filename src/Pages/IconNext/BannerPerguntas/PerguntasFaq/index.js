import React, { useState } from 'react';
//
import { IoIosArrowDown } from "react-icons/io";
//
import styles from './styles.module.css';

export default function PerguntasFaq({ title, text }) {

    //STATES
    const [showText, setShowText] = useState(false);

    const styleIconShow = {
        transform: 'rotateZ(180deg)',
        transition: 'all 0.5s ease-in-out',
    }
    const styleIconHidden = {
        transform: 'rotateZ(0deg)',
        transition: 'all 0.5s ease-in-out',
    }

    const styleTxtShow = {
        maxHeight: '50rem',
        padding: '1rem',
        borderTop: '1px solid #eeeeeeb4'
    }

    //BODY
    return (
        <section className={styles['container']}>

            <div
                className={styles['header']}
                onClick={() => { setShowText(!showText) }}
            >
                <span className={styles['title-header']}>
                    {title || 'Lorem Ipsum'}
                </span>
                <span className={styles['btn-header']}>
                    <IoIosArrowDown
                        style={showText
                            ? styleIconShow
                            : styleIconHidden
                        }
                    />
                </span>
            </div>

            <div
                className={styles['text']}
                style={showText
                    ? styleTxtShow
                    : {}
                }
            >
                {text.map((item) => {
                    return(
                        <span className={styles['item']}>
                            {item}
                        </span>
                    )
                }) || 'Lorem Ipsum Emmet'}
            </div>

        </section>
    )
}
