import Investidor from "/Investidor.jpg"
import { Link } from "react-router-dom"

function Investidores() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-auto shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={Investidor} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">Tipos de investidor</h4>
        <p className="text-slate-300 pb-3">O perfil de investidor ajuda os investidores a identificar seus objetivos e tolerância a riscos. Existem três perfis principais: conservador, moderado e arrojado. Conservador: Prioriza segurança e baixo risco. Moderado: Busca equilíbrio entre segurança e crescimento. Arrojado: Tem alta tolerância a riscos e busca alto retorno. Escolha um perfil que corresponda aos seus objetivos e circunstâncias.</p>
        <Link className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" to="/investidores"> Saiba mais</Link>
      </div>
    </div>
  )
}

export default Investidores