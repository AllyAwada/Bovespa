import Money from "/Money.jpg"
import { Link } from "react-router-dom"

function Moedas() {
  return (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-fit shadow-md rounded-md overflow-hidden">
      <div className="h-40 relative overflow-hidden">
        <img src={Money} className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
      <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
        <h4 className="font-semibold font-lexend text-2xl text-slate-300">Moedas</h4>
        <p className="text-slate-300 pb-3">Investir com moedas estrangeiras, como dólar americano, euro, franco suíço, iene japonês e moedas ligadas a commodities, pode ser uma estratégia eficaz para diversificar sua carteira e gerenciar riscos. Essas moedas oferecem estabilidade, exposição a diferentes economias e proteção contra flutuações do mercado. Ao investir em várias moedas, você pode potencializar seus retornos e reduzir o risco geral de sua carteira.</p>
        <Link className="py-2 px-5 bg-slate-300 mt-2 w-fit rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-500 hover:text-slate-300 transition duration-700" to="/moedas"> Saiba mais</Link>
      </div>
    </div>
  )
}

export default Moedas