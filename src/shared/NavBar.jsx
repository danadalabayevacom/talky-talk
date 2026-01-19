import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const NavBar = () => {
  const location = useLocation();


const getClass=(to, location)=>{

  return clsx(
    location.pathname === to && "text-blue-900 hover:text-blue-900"
  )
}

  return (
    <nav className="flex w-full justify-center bg-sky-600 py-6 ">
      <div id="ok" className="flex w-full max-w-md  justify-between text-blue-900/50 mx-2 text-xl font-bold">
        <Link
          to="/"
          className={getClass("/", location)}
        >
          Main
        </Link>
        <Link
          to="/month"
          className={getClass("/month",location)}
        >
          Month
        </Link>
        <Link
          to="/gender"
          className={getClass("/gender",location)}
        >
          Gender
        </Link>
        <Link
          to="/about"
          className={getClass("/about",location)}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
