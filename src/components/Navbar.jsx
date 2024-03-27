import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="bg-purple-300 flex justify-between px-4 py-3">
        <div className="logo font-bold cursor-pointer text-white text-xl">
<span className="text-green-800">&lt; <span className="text-white">Password</span> Manager /&gt;</span>
        </div>
      <ul>
        <li className="flex gap-4">
            <Link className="hover:font-bold" to="/">Home</Link>
            <Link className="hover:font-bold" to="/">About</Link>        
            <Link className="hover:font-bold" to="/">Services</Link>
            <Link className="hover:font-bold" to="/contactus">Contact us</Link>
        </li>
      </ul>
    </nav>
  )
}
