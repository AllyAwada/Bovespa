import React from 'react'
import Commodities from '../assets/Components/Commodities'
import Header from '../assets/Components/Header'
import Investidores from '../assets/Components/Investidores'
import Brasileiros from '../assets/Components/Brasileiros'
import Moedas from '../assets/Components/Moedas'
import Termos from '../assets/Components/Termos'
import International from '../assets/Components/International'
import Funcionamento from '../assets/Components/Funcionamento'
import Profissao from '../assets/Components/Profissao'
import Riscos from '../assets/Components/Riscos'
function Home() {
  return (
    <main>
      <Header />
      <div className="h-screen flex items-center justify-center flex-wrap gap-5 pt-20 mx-5">
        <Commodities />
        <Investidores />
        <Brasileiros />
        <Moedas />
        <Termos />
        <International />
        <Funcionamento />
        <Profissao />
        <Riscos />
      </div>
    </main>
  )
}

export default Home