
import { useForm } from "react-hook-form";
import { API } from "../../services/API";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("petname", data.petname);
        formData.append("nickname", data.nickname);
        formData.append("password", data.password);
        formData.append("image", data.image[0]);
        formData.append("type", data.type);
        formData.append("description", data.description);
        API.post("/mascota/register", formData).then((res) => {
            console.log(res)
            if (res) {
                navigate("/login");
            }


        })
    };

    return (

        <form onSubmit={handleSubmit(formSubmit)}>
            <label htmlFor="petname">Petname</label>
            <input type="text" id="petname" name="petname"  {...register("petname")} />

            <label htmlFor="nickname">Nickname</label>
            <input type="text" id="nickname" name="nickname" {...register("nickname")} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" {...register("password")} />

            <label htmlFor="image">Image</label>
            <input type="file" id="image" name="image" {...register("image")} />

            <label htmlFor="type">Type</label>
            <input type="text" id="type" name="type" {...register("type")} />

            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" {...register("description")} />

            <button type="submit">Register</button>
        </form>
    )
}

export default Register