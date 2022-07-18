import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
import { Link} from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="flex w-full justify-between shadow-xl">
            <div className="m-5">
                <h1 className="text-xl">
                    Métodos HTTP
                </h1>
            </div>
            <ul className="flex m-5 w-64 justify-between text-xl font-light">
                <li>
                    <Link to="/" className="flex items-center">
                        <BiHomeHeart />
                        <span className="ml-1">
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="flex items-center">
                        <MdOutlineContactPage />
                        <span className="ml-1">
                            Contact Me
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;