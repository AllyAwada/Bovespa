import Brasil from "/Brasileiros.jpg"
import { Link } from "react-router-dom"

function Brasileiros() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-fit shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={Brasil} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">Como a B³ interfere na vida dos brasileiros?</h4>
        <p className="text-slate-300 pb-3">A Bolsa de Valores funciona como um lugar seguro em que pessoas e empresas podem fazer negociações online. As empresas vendem parte de seu negócio (na forma de ações) e as pessoas interessadas podem comprá-las e vendê-las entre si para obter lucro.</p>
        <Link className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" to="/brasileiros"> Saiba mais</Link>
      </div>
    </div>
  )
}

export default Brasileiros