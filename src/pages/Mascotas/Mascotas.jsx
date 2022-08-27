

import React from "react";
import { useState, useEffect } from "react";
import { API } from "../../services/API";


const Mascotas = () => {
    const [allMascotas, setAllMascotas] = useState([]);

    const getAllMascotas = async () => {
        API.get("/mascotas").then((restMascotas) => {
            setAllMascotas(restMascotas.data.mascotas)
        });
    };

    useEffect(() => {
        getAllMascotas();
    }, []);



    return (

        <section>
            <h2>Mascotas</h2>

            <div>

                {allMascotas.length > 0 ? allMascotas.map((mascota) => { mascota.name }) :
                    <p>Loading Mascotas</p>}

            </div>

        </section>
    )
}

export default Mascotas;