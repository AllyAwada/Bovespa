import Header from '../assets/Components/Header'

import Interconexao from '/Interconexao.jpg'
import Capitais from '/Capitais.jpg'
import Correlacao from '/Correlacao.jpg'
import Tecnologia from '/Tecnologia.jpg'

function InternationalDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-2xl">
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Interconexao} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Interconexão de Mercados</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">A B3 pode ter acordos de interconexão com outras bolsas de valores, permitindo que investidores brasileiros negociem ativos estrangeiros e vice-versa. Isso pode facilitar a diversificação de portfólios e o acesso a uma gama mais ampla de investimentos.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Capitais} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Fluxo de Capitais</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Investidores estrangeiros podem investir na Bovespa, assim como investidores brasileiros podem investir em bolsas de valores estrangeiras. Esse fluxo de capitais pode ser influenciado por fatores econômicos, políticos e regulatórios em ambos os países.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Correlacao} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Correlação de Mercado</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Os mercados financeiros globais estão interligados, o que significa que movimentos em uma bolsa de valores podem influenciar outras bolsas ao redor do mundo. Eventos significativos em uma grande bolsa de valores, como a NYSE nos Estados Unidos ou a LSE no Reino Unido, podem ter impacto na B3 e vice-versa.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Tecnologia} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Integração de Sistemas e Tecnologia</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">As bolsas de valores frequentemente colaboram e compartilham tecnologia para melhorar a eficiência das operações e aumentar a segurança e a transparência do mercado. Isso pode incluir a adoção de sistemas de negociação eletrônica e padrões comuns de relatórios.</p>
          </ul>
        </section>
      </div>
    </main >
  )
}

export default InternationalDetalhes