import React, { useState } from 'react'
import styles from './styles.module.css'
import { Constants } from '../Constants'
import { BiSearchAlt } from 'react-icons/bi'

import { telefonia } from '../BannerPerguntas/ApiFaq/Telefonia/apiTelefonia'
import { pacotes } from '../BannerPerguntas/ApiFaq/Pacotes/apiPacotes'
import { ativacao } from '../BannerPerguntas/ApiFaq/Ativação/apiAtivacao'
import { aplicativo } from '../BannerPerguntas/ApiFaq/Aplicativo/apiAplicativo'
import { completa } from '../BannerPerguntas/ApiFaq/apiCompleta.js'

import PerguntasFaq from './PerguntasFaq'
import { filtraObjeto } from '../../../function/filters/filtroObjeto.js'
import FaqSVG from '../../../assets/FaqSVG'


export default function Perguntas() {

    const [lista, setLista] = useState('0')
    const [busca, setBusca] = useState('')

    const filtroLista = completa.filter((item) => filtraObjeto(item, busca, [`title`]))

    return (
        <section className={styles['container']}>
            <div className={styles['faq-cont']}>
                <FaqSVG 
                color={'#0E01FF'} 
                colorSecond={'#0E01FFbf'}
                style={{width: '25%'}}
                />
                
                <span className={styles['title']}> Perguntas Frequentes </span>
            </div>
            <div className={styles['input-cont']}>
                <button className={styles['search-icon']}><BiSearchAlt /></button>
                <input
                    onChange={(e) => setBusca(e.target.value)}
                    type='text'
                    value={busca}
                    placeholder='Procurar por Palavra Chave'
                    className={styles['input']}
                />
            </div>
            <div className={styles['button-cont']}>
                <button className={styles['button']} onClick={() => setLista('0')} >{Constants.texts.nomeEmpresa}, telefonia e rede</button>
                <button className={styles['button']} onClick={() => setLista('1')}>Pacotes e preços</button>
                <button className={styles['button']} onClick={() => setLista('2')}> Pedido do chip e ativação</button>
                <button className={styles['button']} onClick={() => setLista('3')}>Aplicativo</button>
            </div>
            <div
                className={styles['perguntas-faq']}
            >
                {busca.length < 1 ? telefonia.map(telefonias => {
                    return (
                        lista === '0' && <PerguntasFaq
                            key={telefonias.id}
                            title={telefonias.title}
                            text={telefonias.text}
                            value='0'
                            state={lista}
                            setState={setLista}
                        />

                    );
                }) : filtroLista.map(item => {
                    return (
                        lista === '0' && <PerguntasFaq
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            value='0'
                            state={lista}
                            setState={setLista}
                        />

                    );
                })}
            </div>
            <div
                className={styles['perguntas-faq']}
            >
                {busca.length < 1 ? pacotes.map(item => {
                    return (
                        lista === '1' && <PerguntasFaq
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            value='1'
                            state={lista}
                            setState={setLista}
                        />

                    );
                }) : filtroLista.map(item => {
                    return (
                        lista === '1' && <PerguntasFaq
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            value='1'
                            state={lista}
                            setState={setLista}
                        />

                    );
                })}
            </div>
            <div
                className={styles['perguntas-faq']}
            >
                {busca.length < 1 ? ativacao.map(telefonias => {
                    return (
                        lista === '2' && <PerguntasFaq
                            key={telefonias.id}
                            title={telefonias.title}
                            text={telefonias.text}
                            value='2'
                            state={lista}
                            setState={setLista}
                        />

                    );
                }) : filtroLista.map(item => {
                    return (
                        lista === '2' && <PerguntasFaq
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            value='2'
                            state={lista}
                            setState={setLista}
                        />

                    );
                })}
            </div>
            <div
                className={styles['perguntas-faq']}
            >
                {busca.length < 1 ? aplicativo.map(telefonias => {
                    return (
                        lista === '3' && <PerguntasFaq
                            key={telefonias.id}
                            title={telefonias.title}
                            text={telefonias.text}
                            value='3'
                            state={lista}
                            setState={setLista}
                        />

                    );
                }) : filtroLista.map(item => {
                    return (
                        lista === '3' && <PerguntasFaq
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            value='3'
                            state={lista}
                            setState={setLista}
                        />

                    );
                })}
            </div>
        </section>
    )
}
