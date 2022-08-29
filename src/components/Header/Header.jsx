import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext"
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const { mascota, logout } = useContext(JwtContext);
    let navigate = useNavigate();

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
                    {mascota ? (
                        <>

                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                        </>
                    ) : null}
                </ul>
                <div className="control">
                    {mascota ? (  
                            <>                           
                            {mascota.image !== "undefined" ? (                                
                                <img src={mascota?.image} alt="Mascota Image" />
                                ) : null}

                            <button onClick={() => logout() & navigate("/")}>Logout</button>
                            </>
                    ) : (
                        <ul className="botones">
                            <li>
                               <button> <Link to="/login">Login</Link></button>
                            </li>
                            <li>
                                <button className="boton">  <Link to="/register">Register</Link></button>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
