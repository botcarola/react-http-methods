import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {

    return(
        <footer className="w-full flex justify-center bg-lime-300">
            <ul className="w-64 flex justify-evenly m-5 text-xl text-slate-700">
                <li>
                    <a href="https://www.linkedin.com/in/carolina-lerner-223034214/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/botcarola" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/car0labc/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;