

import React from "react";
import { useState, useEffect } from "react";
import MascotaCard from "../../components/MascotaCard/MascotaCard";
import Search from "../../components/Search/Search";
import { API } from "../../services/API";
import "./Mascotas.css"


const Mascotas = () => {
    const [allMascotas, setAllMascotas] = useState([]);
    const [filterWord, setFilterWord] = useState("");

    const setFilteredMascotas = allMascotas.filter((mascota) =>
        mascota.petname.toLowerCase().includes(filterWord) ||
        mascota.type.toLowerCase().includes(filterWord) ||
        mascota.nickname.toLowerCase().includes(filterWord) ||
        mascota.description.toLowerCase().includes(filterWord)

    )

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
        <section className="main">

            <h2>Mascotas</h2>
            <Search setFilterWord={setFilterWord} />


            <div className="gallery">


                {allMascotas.length ? setFilteredMascotas.map((mascota) => <MascotaCard mascota={mascota} key={mascota._id} />) : <p>Loading Mascota... </p>}

            </div>
            {!setFilteredMascotas.length ? <p>Mascota not found</p> : <p>null</p>}


        </section>
    )
}

export default Mascotas;