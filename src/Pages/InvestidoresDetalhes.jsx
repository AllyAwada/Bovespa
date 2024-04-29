import Header from '../assets/Components/Header'

import Conservador from '/Conservador.jpg'
import Moderado from '/Moderado.jpg'
import Agressivo from '/Agressivo.jpg'

function InvestidoresDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-2xl">
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Conservador} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Perfil do Investidor Conservador</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">O perfil conservador é caracterizado por indivíduos que priorizam a segurança dos seus investimentos, optando por opções de baixo risco. Esses investidores buscam aplicações previsíveis, de longo prazo e com alta liquidez, permitindo o resgate dos valores sem data de vencimento. A segurança é tão importante que eles podem abrir mão de rentabilidades mais altas para preservar seu patrimônio. Investidores iniciantes ou sem experiência no mercado financeiro geralmente se encaixam nesse perfil.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Moderado} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Perfil do Investidor Moderado</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">O perfil moderado busca equilíbrio entre segurança e rentabilidade. Esses investidores estão dispostos a incluir aplicações de risco um pouco maior em suas carteiras, mas sem deixar de lado a segurança. Eles aceitam ativos com maior volatilidade e liquidez mais baixa, mas mantêm aplicações mais estáveis no portfólio para garantir equilíbrio. Investidores com algum conhecimento do mercado e experiência em aplicações anteriores tendem a se encaixar nesse perfil.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Agressivo} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Perfil do Investidor Arrojado ou Agressivo</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">O perfil arrojado, também conhecido como agressivo, é caracterizado por alta tolerância a riscos e busca por rentabilidade. Esses investidores arriscam mais e aceitam bem ativos com maior oscilação no mercado. Apesar dos riscos mais altos, eles montam seus portfólios estrategicamente, identificando oportunidades de ganhos mais altos. No entanto, também mantêm investimentos conservadores como reserva de emergência.</p>
          </ul>
        </section>
      </div>

    </main >
  )
}

export default InvestidoresDetalhes