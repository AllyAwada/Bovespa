import Header from '../assets/Components/Header'

import Acoes from '/Acoes.jpg'
import Negocios from '/Negocios.jpg'
import Ipo from '/Ipo.jpg'
import Dividendos from '/Dividendos.jpg'
import Fusoes from '/Fusoes.jpg'
import Instituicao from '/Instituicao.jpg'

function FuncionamentoDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-2xl">
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Acoes} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Mercado de Ações</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Na Bovespa/B3, as empresas emitem ações que representam partes do seu capital social. Os investidores compram essas ações, fornecendo capital para as empresas. O valor das ações varia de acordo com a oferta e demanda no mercado, refletindo as expectativas dos investidores em relação ao desempenho futuro da empresa.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Ipo} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Oferta Pública Inicial (IPO)</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Quando uma empresa decide abrir seu capital e listar suas ações na bolsa, ela realiza um IPO. Nesse processo, parte de sua propriedade é oferecida ao público em troca de investimento. Isso gera capital para a empresa, que pode ser usado para financiar o crescimento, investir em novos projetos ou pagar dívidas.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Negocios} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Negociação de Ações</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Uma vez listadas na bolsa, as ações são negociadas entre investidores no mercado secundário. Esse processo de compra e venda ocorre através de corretoras e é facilitado pela infraestrutura da bolsa, que garante transparência, segurança e liquidez nas operações.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Dividendos} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Dividendos e Valorização</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Os investidores podem obter retorno sobre seu investimento de duas maneiras principais: através do recebimento de dividendos, que são parte dos lucros distribuídos pelas empresas aos acionistas, e pela valorização das ações, que ocorre quando o preço das ações aumenta no mercado.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Fusoes} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Fusões e Aquisições</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Outro mecanismo de acumulação de capital envolve fusões e aquisições de empresas. Nesse processo, uma empresa pode adquirir outra empresa para expandir seus negócios ou consolidar sua posição no mercado. Isso muitas vezes envolve a compra de ações no mercado aberto.</p>
          </ul>
        </section>        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Instituicao} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Investimento Institucional</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Grandes instituições financeiras, como fundos de investimento, bancos e seguradoras, também desempenham um papel importante na acumulação de capital na bolsa. Essas instituições investem grandes quantias de dinheiro em ações e outros ativos financeiros em nome de seus clientes.</p>
          </ul>
        </section>
      </div>
    </main >
  )
}

export default FuncionamentoDetalhes