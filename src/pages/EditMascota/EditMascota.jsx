

import { useContext } from "react"
import { JwtContext } from "../../context/jwtContext"
import { API } from "../../services/API"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const EditMascota = () => {
    const { editingMascota } = useContext(JwtContext);
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const defaultValues = {
        petname: editingMascota.petname,
        nickname: editingMascota.nickname,
        password: editingMascota.password,
        image: editingMascota.image,
        type: editingMascota.type,
        description: editingMascota.description
    };

    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("petname", data.petname);
        formData.append("nickname", data.nickname);
        formData.append("image", data.image[0]);
        formData.append("type", data.type);
        formData.append("description", data.description);

        API.patch(`/${editingMascota.type}/${editingMascota._id}`, formData).then((res) => {
            navigate("/mascota")
        })

    }


    return (
        <section>

            <h2>Edit Mascota</h2>
            <form onSubmit={handleSubmit(formSubmit)}>
                <label htmlFor="petname">Petname</label>
                <input type="text" name="petname" id="petname" {...register("petname")} defaultValue={defaultValues.petname} />

                <label htmlFor="nickname">Nickname</label>
                <input type="text" name="nickname" id="nickname" {...register("nickname")} defaultValue={defaultValues.nickname} />


                <label htmlFor="image">Image</label>
                <input type="file" name="image" id="image" {...register("image")} defaultValue={defaultValues.image} />

                <label htmlFor="type">Type</label>
                <input type="text" name="type" id="type" {...register("type")} defaultValue={defaultValues.type} />


                <label htmlFor="description">Type</label>
                <input type="text" name="description" id="description" {...register("description")} defaultValue={defaultValues.description} />

                <button type="submit">Edit</button>

            </form>
        </section>
    )
}

export default EditMascota;