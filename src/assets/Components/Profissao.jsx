import Trader from "/Trader.jpg"
import { Link } from "react-router-dom"

function Profissao() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-fit shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={Trader} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">A profissão</h4>
        <p className="text-slate-300 pb-3">No universo da Bolsa de Valores, diversas profissões desempenham papéis fundamentais para o funcionamento e a eficiência do mercado financeiro. Desde economistas até traders, cada profissional contribui de maneira única para o processo de investimento e tomada de decisões. Vamos agora explorar algumas dessas profissões-chave e entender suas funções específicas e impacto no mercado.</p>
        <Link className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" to="/profissao"> Saiba mais</Link>
      </div>
    </div>
  )
}

export default Profissao