import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";
import { API } from "../../services/API";
import Swal from "sweetalert2";
import "./Profile.css";


const Profile = () => {
    const { mascota, logout } = useContext(JwtContext);
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();



    const defaultValues = {
        petname: mascota.petname,
    };

    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("petname", data.petname);
        formData.append("image", data.image[0]);
        API.patch(`/mascota/${mascota._id}`, formData).then((res) => {
            logout();
            if (res) {
                navigate("/login");
                Swal.fire("Profile edited, please log in again");
            }
        });
    };
    return (
        <section className="profile">
            <h2>Profile</h2>
            <img src={mascota.image} alt="Mascota image" />
            <form onSubmit={handleSubmit(formSubmit)}>
                <input
                    type="text" id="petname" name="petname" {...register("petname")}
                    defaultValue={defaultValues.petname}
                />
                <input type="file" id="image" name="image" {...register("image")} />
                <button type="submit">Edit Profile</button>
            </form>
        </section>
    );
};

export default Profile;
