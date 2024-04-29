import { Link } from "react-router-dom"
import Marquinhos from "/LogoMarquinhos.jpg"
import Unasp from "/Unasp.png"
import Bahia from "/Bahia.png"

function Header() {
  return (
    <header className="z-40 w-screen bg-gray-800 flex justify-between top-0 left-0 fixed">
      <ul className="flex justify-normal">
        <Link className="ml-5 my-3 px-5 py-2 text-slate-300 text-base font-lexend transition duration-700 border-2 border-transparent rounded-3xl hover:border-slate-300 cursor-pointer" to="/">Home</Link>
        <Link className="ml-5 my-3 px-5 py-2 text-slate-300 text-base font-lexend transition duration-700 border-2 border-transparent rounded-3xl hover:border-slate-300 cursor-pointer" to="/bibliografia">Bibliografia</Link>
      </ul>
      <ul className="flex justify-normal mr-5">
        <img className="mr-5 my-3 px-1 py-1 w-10" src={Unasp} alt="" />
        <img className="mr-5 my-3 px-1 py-1 w-10" src={Bahia} alt="" />
        <img className="mr-5 my-3 px-1 py-1 w-10" src={Marquinhos} alt="" />
      </ul>
    </header>
  )
}

export default Header