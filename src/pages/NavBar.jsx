import {Link} from "react-router-dom";

const NavBar =()=>{
    return    (
     <nav className="flex justify-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Main
            </Link>
            <Link to="/month" className="text-gray-600 hover:text-gray-900">
              Month
            </Link>
            <Link to="/gender" className="text-gray-600 hover:text-gray-900">
              Gender
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            </nav>
    )
}

export default NavBar;