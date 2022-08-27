

import React from "react";
import { useState, useEffect } from "react";
import MascotaCard from "../../components/MascotaCard/MascotaCard";
import { API } from "../../services/API";
import "./Mascotas.css"


const Mascotas = () => {
    const [allMascotas, setAllMascotas] = useState([]);

    const getAllMascotas = async () => {
        API.get("/mascota").then((restMascotas) => {
            console.log(restMascotas)
            setAllMascotas(restMascotas.data.mascotas)
        });
    };

    useEffect(() => {
        getAllMascotas();
    }, []);



    return (
        <> <div className="titulo-mascota"><h2>Mascotas</h2></div>


        <section className="main">
            <div className="gallery">
        {allMascotas.length?allMascotas.map((mascota)=><MascotaCard mascota={mascota} key={mascota._id}/>):<p>Loading Mascota... </p>}
           
        </div>

        </section></>
    )
}

export default Mascotas;