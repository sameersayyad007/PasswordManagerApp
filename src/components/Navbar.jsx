

export default function Navbar() {
  return (
    <nav className="bg-purple-300 flex justify-between px-4 py-3">
        <div className="logo font-bold cursor-pointer text-white text-xl">
<span className="text-green-800">&lt; <span className="text-white">Password</span> Manager /&gt;</span>
        </div>
      <ul>
        <li className="flex gap-4">
            <a className="hover:font-bold" href="/">Home</a>
            <a className="hover:font-bold" href="/">About</a>        
            <a className="hover:font-bold" href="/">Services</a>
            <a className="hover:font-bold" href="/">Contact us</a>
        </li>
      </ul>
    </nav>
  )
}
