import { Link } from "react-router-dom"

function Header() {
  return (
  <header className="z-40 w-screen bg-gray-800 flex justify-between top-0 left-0 fixed">
    <Link className="ml-5 my-3 px-5 py-2 text-slate-300 text-base font-lexend transition duration-700 border-2 border-transparent rounded-3xl hover:border-slate-300 cursor-pointer" to="/">Home</Link>
  </header>
  )
}

export default Header