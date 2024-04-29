import Header from '../assets/Components/Header'

import Acompanhamento from '/Acompanhamento.jpg'
import Ferramentas from '/Ferramentas.jpg'
import Toro from '/Toro.jpg'

function BrasileirosDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-2xl">
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Acompanhamento} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Acompanhamento de Investimentos</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">É essencial acompanhar seus investimentos na Bolsa de Valores para ter sucesso. Ferramentas digitais, acessíveis por computador ou celular, permitem o acompanhamento diário, fornecendo históricos de cotações, valores atualizados e oscilações de preços em tempo real.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Ferramentas} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Ferramentas Digitais para Investidores</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Ferramentas digitais ajudam investidores a encontrar boas oportunidades. Elas fornecem dados essenciais, como o melhor momento para negociar ativos, o que diferencia investidores bem-sucedidos. Soluções tecnológicas eficientes facilitam o investimento na Bolsa, permitindo decisões mais precisas e embasadas.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Toro} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Toro: Investindo Simplificado</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Mesmo com dados disponíveis, alguns investidores ainda têm dúvidas sobre quando comprar ou vender ativos. A plataforma Toro simplifica o processo, tornando a complexidade fácil de entender. Além disso, a Toro oferece conteúdo educativo, como cursos de Bolsa de Valores e acesso a novidades do mercado financeiro.</p>
          </ul>
        </section>
      </div>
    </main >
  )
}

export default BrasileirosDetalhes