import "./Header.css"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>

            <h1>Mis Mascotas</h1>
            <nav>
                <img src="https://images-ext-2.discordapp.net/external/Frz1bbdfy4ji9y7uwoYBtx7SwGUL5kPxPnM0Q7aly1U/%3Fw%3D2000/https/img.freepik.com/vector-premium/lindo-logo-tienda-mascotas-gato-perro_454510-133.jpg?width=702&height=702" alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/mascotas">Mascotas</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>

                </ul>


            </nav>
        </header>



    )
}

export default Header;