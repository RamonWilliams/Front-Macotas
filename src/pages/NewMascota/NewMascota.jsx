import { useState } from "react";
import { API } from "../../services/API";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./NewMascota.css";


const NewMascota = () => {
    const { register, handleSubmit } = useForm();
    const [type, setType] = useState("mascota")
    let navigate = useNavigate();


    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("petname", data.petname);
        formData.append("nickname", data.nickname);
        formData.append("image", data.image[0]);
        formData.append("type", data.type);
        formData.append("description", data.description);

        API.post(`/${type}/register`, formData).then((res) => {
            navigate("/mascotas")
        })
    }

    return (
        <section className="newmascota">
            <h2>Register Mascota:</h2>
            <form onSubmit={handleSubmit(formSubmit)}>



                <label htmlFor="petname">Petname</label>
                <input type="text" name="petname" id="petname" {...register("petname")} />

                <label htmlFor="nickname">Nickname</label>
                <input type="text" name="nickname" id="nickname" {...register("nickname")} />


                <label htmlFor="image">Image</label>
                <input type="file" name="image" id="image" {...register("image")} />

                <label htmlFor="type">Type</label>
                <input type="text" name="type" id="type" {...register("type")} />


                <label htmlFor="description">Type</label>
                <input type="text" name="description" id="description" {...register("description")} />

                <button type="submit">Create</button>
            </form>
        </section>
    );
};

export default NewMascota;
