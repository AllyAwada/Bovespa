import Inrernacional from "/Inrernacional.jpg"
import { Link } from "react-router-dom"

function International() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-fit shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={Inrernacional} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">International network</h4>
        <p className="text-slate-300 pb-3">A B³ está interligada com outras bolsas de valores globalmente de várias maneiras. Ela possui acordos de interconexão que permitem a negociação de ativos estrangeiros, recebe investimentos estrangeiros e está sujeita à influência de eventos e movimentos em outras bolsas importantes. Além disso, as bolsas colaboram em tecnologia e sistemas para melhorar a eficiência e a transparência do mercado. Essa interconexão reflete a natureza global dos mercados financeiros e a importância da cooperação e integração entre as bolsas de valores ao redor do mundo.</p>
        <Link className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" to="/international"> Saiba mais</Link>
      </div>
    </div>
  )
}

export default International