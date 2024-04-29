import RiscosB from "/RiscosB.jpg"
import { Link } from "react-router-dom"

function Riscos() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-fit shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={RiscosB} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">Riscos</h4>
        <p className="text-slate-300 pb-3">No mercado de investimentos, os riscos incluem flutuações de mercado, crédito, liquidez, cambial, concentração e longevidade. Para mitigá-los, os investidores podem diversificar suas carteiras, escolher ativos de qualidade, monitorar a liquidez, considerar hedge cambial, evitar concentração excessiva e planejar para a longevidade dos investimentos.</p>
        <Link className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" to="/riscos"> Saiba mais</Link>
      </div>
    </div>
  )
}

export default Riscos