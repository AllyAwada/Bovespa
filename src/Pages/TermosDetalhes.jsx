import Header from '../assets/Components/Header'

import Alta from '/Alta.jpg'
import Baixa from '/Baixa.jpg'

function BrasileirosDetalhes() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="p-16 m-20 bg-gray-800  gap-10 rounded-2xl">
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Alta} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Bolsa em Alta</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Quando a Bolsa fecha em alta, significa que os preços das ações subiram em relação ao pregão anterior. Isso geralmente indica otimismo dos investidores sobre a economia e as perspectivas de crescimento das empresas listadas. Uma Bolsa em alta pode impulsionar a confiança dos consumidores e das empresas, levando a maiores investimentos e gastos, o que pode estimular o crescimento econômico.</p>
          </ul>
        </section>
        <section className="mt-10 flex gap-4">
          <img className="h-48 w-64 rounded cursor-pointer" src={Baixa} alt="" />
          <ul>
            <h1 className="text-slate-300 text-3xl font-bold  mb-2">Bolsa em Baixa</h1>
            <p className="text-slate-300 text-xl font-normal flex flex-wrap gap-5">Quando a Bolsa fecha em baixa, significa que os preços das ações caíram em relação ao pregão anterior. Isso geralmente indica pessimismo dos investidores sobre a economia e as perspectivas das empresas. Uma Bolsa em baixa pode levar à perda de confiança, redução de investimentos e gastos, o que pode desacelerar o crescimento econômico ou até mesmo levar à recessão.</p>
          </ul>
        </section>
      </div>
    </main >
  )
}

export default BrasileirosDetalhes