import Header from '../assets/Components/Header'

import Soja from '/Soja.jpg'
import Cafe from '/Cafe.jpg'
import Petroleo from '/Petroleo.jpg'
import Aluminio from '/Aluminio.jpg'
import Suco from '/Suco.jpg'
import Ferro from '/Ferro.jpg'
import Carne from '/Carne.jpg'

function CommoditiesDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-3xl block items-start">
        <section>
          <h1 className="text-slate-300 text-3xl font-bold">As 7 principais commodities que atuam no Brasil:</h1>
          <ul className="text-slate-300 text-xl font-semibold flex flex-wrap gap-5">
            <li>
              <ul className="flex justify-center my-2">
                <li>Soja</li>
              </ul>
              <img className="h-48 w-64 rounded cursor-pointer" src={Soja} alt="" />
            </li>

            <li>
              <ul className="flex justify-center my-2">
                <li>Cafe</li>
              </ul>
              <img className="h-48 w-64 rounded cursor-pointer" src={Cafe} alt="" />
            </li>

            <li>
              <ul className="flex justify-center my-2">
                <li>Petróleo</li>
              </ul>
              <img className="h-48 w-64 rounded cursor-pointer" src={Petroleo} alt="" />
            </li>

            <li>
              <ul className="flex justify-center my-2">
                <li>Alumínio</li>
              </ul>
              <img className="h-48 w-64 rounded cursor-pointer" src={Aluminio} alt="" />
            </li>

            <li>
              <ul className="flex justify-center my-2">
                <li>Suco de Laranja</li>
              </ul>
              <img className="h-48 w-64 rounded cursor-pointer" src={Suco} alt="" />
            </li>

            <li>
              <ul className="flex justify-center my-2">
                <li>Minério de Ferro</li>
              </ul>
              <img className="h-48 w-64 rounded cursor-pointer" src={Ferro} alt="" />
            </li>

            <li>
              <ul className="flex justify-center my-2">
                <li>Boi Gordo (carne)</li>
              </ul>
              <img className="h-48 w-64 rounded cursor-pointer" src={Carne} alt="" />
            </li>
          </ul >
        </section>
        <section className="mt-10">
          <h1 className="text-slate-300 text-3xl font-bold  mb-5">Quais as vantagens de investir nelas?</h1>
          <ul className="text-slate-300 text-xl font-semibold flex flex-wrap gap-5">
            <p>As comodities servem como componentes essenciais na produção de bens e serviços, além de serem ativos negociados nos mercados financeiros. Além disso, as commodities desempenham um papel crucial na diversificação de portfólios de investidores, proporcionando oportunidades de hedging e especulação.</p>
          </ul>
        </section>
      </div>

    </main >
  )
}

export default CommoditiesDetalhes