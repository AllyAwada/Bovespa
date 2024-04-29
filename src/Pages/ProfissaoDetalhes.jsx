import Header from '../assets/Components/Header'

import Economista from '/Economista.jpg'
import Corretor from '/Corretor.jpg'
import Analista from '/Analista.jpg'
import Trader from '/Trader.jpg'
import Risco from '/Risco.jpg'

function ProfissaoDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-2xl">
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Economista} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Economista Financeiro</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Economistas financeiros analisam dados econômicos e preveem tendências para orientar decisões de investimento. Eles desenvolvem estratégias com base em suas análises.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Corretor} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Corretor de Investimentos</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Corretores de investimentos atuam como intermediários entre investidores e o mercado. Eles oferecem consultoria personalizada e ajudam na tomada de decisões de investimento.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Analista} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Analista de Investimentos</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Analistas de investimentos realizam análises detalhadas de empresas e setores. Eles recomendam a compra ou venda de ações com base em análises fundamentais e técnicas.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Trader} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Trader</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Traders compram e vendem ativos financeiros no curto prazo para obter lucro com as flutuações do mercado.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Risco} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Analista de Risco</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Analistas de risco avaliam e gerenciam os riscos associados aos investimentos. Eles desenvolvem modelos estatísticos para prever riscos financeiros.</p>
          </ul>
        </section>
      </div>
    </main >
  )
}

export default ProfissaoDetalhes