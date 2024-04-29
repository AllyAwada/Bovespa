import Dicionario from "/Dicionario.jpg"
import { Link } from "react-router-dom"

function Termos() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-fit shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={Dicionario} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">Termos</h4>
        <p className="text-slate-300 pb-3">A Bolsa de Valores é considerada "em alta" quando o índice de fechamento de um pregão é superior ao do pregão anterior, "em baixa" quando é inferior e "estável" quando permanece o mesmo. Na BOVESPA, o Ibovespa é o índice utilizado para determinar a alta ou baixa da Bolsa.</p>
        <Link className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" to="/termos"> Saiba mais</Link>
      </div>
    </div>
  )
}

export default Termos