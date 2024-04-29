import Header from '../assets/Components/Header'

import RiscosM from '/RiscosM.jpg'
import RiscosC from '/RiscosC.jpg'

function RiscosDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-2xl">
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={RiscosM} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Risco de Mercado</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Este é o risco de que os movimentos gerais do mercado causem perdas nos investimentos. Ele pode acontecer devido a eventos macroeconômicos, políticos, ou mesmo mudanças nas taxas de juros. Para driblar esse risco, os investidores podem diversificar suas carteiras, investindo em uma variedade de ativos para reduzir a exposição a movimentos de mercado únicos.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={RiscosC} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Risco de Crédito</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Esse risco está relacionado à possibilidade de que um emissor de títulos ou instrumentos financeiros não seja capaz de pagar o principal ou os juros devidos aos investidores. Para mitigar esse risco, os investidores podem optar por investir em títulos de alta qualidade de crédito ou utilizar ferramentas como análise de crédito para avaliar a solidez financeira dos emissores.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4 ml-72">
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Risco de Liquidez</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Refere-se à possibilidade de não conseguir vender um ativo rapidamente sem afetar significativamente seu preço de mercado. Para evitar esse risco, os investidores podem optar por investir em ativos mais líquidos ou diversificar suas carteiras entre ativos líquidos e menos líquidos.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4 ml-72">
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Risco Cambial</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Este risco surge quando os investimentos são denominados em uma moeda diferente da moeda local do investidor. Flutuações nas taxas de câmbio podem afetar negativamente o valor dos investimentos. Para mitigar esse risco, os investidores podem considerar o uso de instrumentos financeiros como contratos de futuros ou opções de câmbio.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4 ml-72">
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Risco de Concentração</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Surge quando um investidor tem uma grande parte de seu portfólio investido em um único ativo ou classe de ativos. Diversificar os investimentos em diferentes setores, regiões geográficas e tipos de ativos pode ajudar a reduzir esse risco.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4 ml-72">
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Risco de Longevidade</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Este risco é particularmente relevante para investidores que dependem de seus investimentos para fornecer renda na aposentadoria. Ele se refere ao risco de que os investimentos possam ser esgotados antes do final da vida do investidor. Para driblar esse risco, os investidores podem considerar a inclusão de investimentos que forneçam renda estável e duradoura, como anuidades ou fundos de pensão.</p>
          </ul>
        </section>
      </div>
    </main >
  )
}

export default RiscosDetalhes