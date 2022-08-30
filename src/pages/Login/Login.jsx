

import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/API";
import "./Login.css";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    let navigate = useNavigate();

    const { setJwt, setMascota } = useContext(JwtContext);

    const formSubmit = (formData) => {
        API.post("/mascota/login", formData).then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("mascota", JSON.stringify(res.data.mascotaInDb));
            setJwt(res.data.token);
            setMascota(res.data.mascotaInDb);
            if (res.data.token) {
                navigate("/");
                Swal.fire("Bienvenido a la web, ya puedes crear y editar mascotas")
            }
        });
    };

    return (
        <section className="login">
            <h2>Please log in:</h2>
            <form onSubmit={handleSubmit(formSubmit)}>
                <label htmlFor="petname">Petname</label>
                <input
                    type="text"
                    id="petname"
                    name="petname"
                    placeholder="petname"
                    {...register("petname",{
                        required:{
                            value: true,
                            message: "Necesitas este campo"
                        } 
                    })} 
                />
                {errors.petname && <span>{errors.petname.message}</span>}               

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    {...register("password",{
                        required:{
                            value:true,
                            message:"Nesecitas este campo"
                        },
                        minLength: {
                            value: 6,
                            message: "La contraseña debe tener al menos 6 caracteres"
                          },
                        
                    })}
                />
                   {errors.password &&  <span>{errors.password.message}</span>}
                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default Login;
