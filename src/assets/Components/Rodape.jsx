import { Link } from "react-router-dom"

function Rodape() {
  return (
    <div className="z-40 bg-gray-800 flex justify-between bottom-0">
      <Link className="ml-5 my-3 px-5 py-2 text-slate-300 text-base font-lexend transition duration-700 border-2 border-transparent rounded-3xl hover:border-slate-300 cursor-pointer" to="/bibliografia">Saiba mais</Link>
    </div>
  )
}

export default Rodape