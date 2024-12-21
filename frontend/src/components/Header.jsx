import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 py-8 bg-red-600">
        <div><Link to="/">Logo</Link></div>
        <div className="flex items-center gap-32">
        <Link to="/team">Team</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/forum">Forum</Link>
        </div>
    </div>
  )
}

export default Header