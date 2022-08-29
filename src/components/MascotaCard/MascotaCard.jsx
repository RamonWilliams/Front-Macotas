import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/JwtContext";
import { API } from "../../services/API";
import Swal from "sweetalert2";

import "./MascotaCard.css"


const MascotaCard = ({ mascota }) => {
    // const { mascota } = useContext(JwtContext);
    let navigate = useNavigate()


    const deleteMascota = () => {
        Swal.fire({
            title: "¿Are you sure you want to delete the mascot",
            text: "You can not get it back",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "yeap, delete!",
        }).then((result) => {

            if (result.isConfirmed) {

                if (mascota.type === "perro") {
                    API.delete(`/mascota/${mascota._id}`).then((res) => {
                        window.location.reload();
                    })
                } else if (mascota.type === "gato") {
                    API.delete(`/mascota/${mascota._id}`).then((res) => {
                        window.location.reload();
                    })
                } else if (mascota.type === "ave") {
                    API.delete(`/mascota/${mascota._id}`).then((res) => {
                        window.location.reload();
                    })
                } else {
                    console.log("Could not delete the mascot")
                }


            }
        })




    };


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

            {mascota ? <><button onClick={() => editMascota(mascota)}>Edit</button>  <button onClick={() => deleteMascota}>Delete</button></> : null}


        </figure>
    )
}

export default MascotaCard;