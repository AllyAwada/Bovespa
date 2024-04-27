import React from 'react'
import Commodities from '../assets/Components/Commodities'
import Header from '../assets/Components/Header'
import Rodape from '../assets/Components/Rodape'

function Home() {
  return (
    <main>
      <Header />
      <div className="h-screen flex items-center justify-center flex-wrap gap-5 pt-20 mx-5">
        <Commodities />
      </div>
      <Rodape />
    </main>
  )
}

export default Home