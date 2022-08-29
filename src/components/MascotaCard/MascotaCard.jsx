import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/JwtContext";
import { API } from "../../services/API";
import { Link } from "react-router-dom";

import "./MascotaCard.css"


const MascotaDetail = ({ mascota }) => {
    // const { mascota } = useContext(JwtContext);
    let navigate = useNavigate() 

    const editMascota = (mascota) => {
        setEditingMascota(mascota);
        navigate("/editmascota");
        console.log(mascota)

    }


    return (
        <figure className="card">
            <div className="pet-image">
                <img src={mascota.image} alt={mascota.petname} />
            </div>

            <h2>Nombre: {mascota.petname}</h2>
            <h3>Apodo: {mascota.nickname}</h3>
            <p>Tipo: {mascota.type}</p>
            <p>Descripción: {mascota.description}</p>
            
        </figure>
    )
}

export default MascotaDetail;