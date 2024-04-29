import Header from '../assets/Components/Header'

import DolarAmericano from '/DolarAmericano.jpg'
import Euro from '/Euro.jpg'
import Franco from '/Franco.jpg'
import Iene from '/Iene.jpg'
import DolarCanadense from '/DolarCanadense.jpg'

function MoedasDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-2xl">
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={DolarAmericano} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">USD (Dólar Americano)</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Como moeda de reserva global, o dólar americano é amplamente aceito e oferece estabilidade. Isso o torna uma escolha atraente para investidores que buscam preservar o valor de seus investimentos.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Euro} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">EUR (Euro)</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">O euro é a moeda principal da zona do euro, que inclui países como Alemanha, França e Itália. É uma moeda importante em transações internacionais e oferece diversificação dentro da Europa.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Franco} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">CHF (Franco Suíço)</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Conhecido por sua estabilidade e segurança, o franco suíço é uma escolha popular para investidores que buscam refúgio em tempos de incerteza econômica.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Iene} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">JPY (Iene Japonês)</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">O iene japonês é considerado uma moeda segura e é valioso em estratégias de diversificação. O Japão tem uma economia forte e estável, o que torna o iene uma opção atraente para investidores que buscam proteção contra flutuações do mercado.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={DolarCanadense} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">CAD (Dólar Canadense) e AUD (Dólar Australiano)</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Essas moedas estão ligadas a commodities, como petróleo e minerais. Investir nessas moedas oferece exposição a setores específicos e pode ser uma estratégia eficaz para diversificar uma carteira e reduzir o risco geral.</p>
          </ul>
        </section>
      </div>
    </main >
  )
}

export default MoedasDetalhes