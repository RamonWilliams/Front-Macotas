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
              API.delete( `/mascota/${mascota._id}`).then((res) => {
               
                  navigate("/");
                  Swal.fire("Mascota eliminada");
                })
              };


            }
        )
    };

    const defaultValues = {
        petname:mascota.petname,
        nickname: mascota.nickname,
        image:mascota.image,
        type: mascota.type,
        description: mascota.description  }  
   
   
   
   
   
   
    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("petname", data.petname);
        formData.append("nickname", data.nickname);       
        formData.append("image", data.image[0]);
        formData.append("type", data.type);
        formData.append("description", data.description);

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
                <label htmlFor="petname">Edit Petname</label>
                <input type="text" id="petname" name="petname" {...register("petname")}
                 defaultValue={defaultValues.petname}/>
                
                <label htmlFor="image">Change your Image</label>
                <input type="file" id="image" name="image" {...register("image")} />
               

                  
                <label htmlFor="type"> Change Type</label>
                <input type="text" id="type" name="type" {...register("type")}/>
                 
                {mascota?(  <>  <button type="submit"> Edit </button>
                <button type="button" onClick={()=>deleteMascota(mascota)}>Delete</button>
                </>): null}
               

                
            </form>
        </section>
    );
};

export default Profile;
