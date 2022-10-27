import { React } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Agil from './Pages/Agil'
import Aiva from './Pages/Aiva'
import Amassteo from './Pages/AmassTeo'
import Avanti from './Pages/Avanti'
import Avatel from './Pages/Avatel'
import Camoa from './Pages/Camoa'
import Cnnct from './Pages/Cnnct'
import Cnx from './Pages/CNX'
import Completa from './Pages/Completa'
import ConectaIP from './Pages/ConectaIP'
import Digi from './Pages/Digi'
import Fnet from './Pages/Fnet'
import GenteTelecom from './Pages/GenteTelecom'
import Guaptel from './Pages/Guaptel'
import Gx from './Pages/Gx'
import Heaven from './Pages/Heaven'
import Hns from './Pages/HNS'
import Home from './Pages/Home'
import IconNext from './Pages/IconNext'
import IndaiaFibra from './Pages/IndaiaFibra'
import Infiniti from './Pages/Infiniti'
import InterPop from './Pages/InterPop'
import Lignet from './Pages/Lignet'
import LinkWap from './Pages/LinkWap'
import LtMovel from './Pages/LTMovel'
import LtTelecom from './Pages/LTTelecom'
import Mck from './Pages/MCK'
import NiqTurbo from './Pages/NiqTurbo'
import Ntmovel from './Pages/NT Móvel'
import OAC from './Pages/OAC'
import Online from './Pages/Online'
import Plus from './Pages/Plus'
import PowerTurbo from './Pages/PowerTurbo'
import Se77e from './Pages/Se77e'
import Techy from './Pages/Techy'
import UaiSat from './Pages/UaiSat'
import Ubernet from './Pages/UberNet'
import ViaMovel from './Pages/ViaMóvel'
import West from './Pages/West'


export default function Rotas() {
  return (
    <section>
      <HashRouter>
        <Routes>
          <Route path ='/' element={<Home/>} />
          <Route path='/Infiniti' element={<Infiniti />} />
          <Route path='/IconNext' element={<IconNext />} />
          <Route path='/Aiva' element={<Aiva />} />
          <Route path='/Agil' element={<Agil />} />
          <Route path='/Amassteo' element={<Amassteo />} />
          <Route path='/Camoa' element={<Camoa />} />
          <Route path='/Cnnct' element={<Cnnct />} />
          <Route path='/Cnx' element={<Cnx />} />
          <Route path='/Completa' element={<Completa />} />
          <Route path='/ConectaIP' element={<ConectaIP />} />
          <Route path='/Digi' element={<Digi />} />
          <Route path='/Fnet' element={<Fnet />} />
          <Route path='/GenteTelecom' element={<GenteTelecom />} />
          <Route path='/Guaptel' element={<Guaptel />} />
          <Route path='/Gx' element={<Gx />} />
          <Route path='/Heaven' element={<Heaven />} />
          <Route path='/Hns' element={<Hns />} />
          <Route path='/IndaiaFibra' element={<IndaiaFibra />} />
          <Route path='/InterPop' element={<InterPop />} />
          <Route path='/Lignet' element={<Lignet />} />
          <Route path='/LinkWap' element={<LinkWap />} />
          <Route path='/LtMovel' element={<LtMovel />} />
          <Route path='/LtTelecom' element={<LtTelecom />} />
          <Route path='/Mck' element={<Mck />} />
          <Route path='/NiqTurbo' element={<NiqTurbo />} />
          <Route path='/Ntmovel' element={<Ntmovel  />} />
          <Route path='/OAC' element={<OAC  />} />
          <Route path='/Online' element={<Online />} />
          <Route path='/PowerTurbo' element={<PowerTurbo />} />
          <Route path='/Se77e' element={<Se77e />} />
          <Route path='/UaiSat' element={<UaiSat />} />
          <Route path='/Ubernet' element={<Ubernet />} />
          <Route path='/ViaMovel' element={<ViaMovel />} />
          <Route path='/West' element={<West />} />
          <Route path='/Avanti' element={<Avanti />} />
          <Route path='/Avatel' element={<Avatel />} />
          <Route path='/Plus' element={<Plus />} />
          <Route path='/Techy' element={<Techy />} />
        </Routes>
      </HashRouter>
    </section>
  )
}
