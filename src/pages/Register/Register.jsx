
import { useForm } from "react-hook-form";
import { API } from "../../services/API";

const Register = () => {
   
    return (

        <form>
        <label htmlFor="petname">Petname</label>
        <input type="text" id="petname" name="petname" />
        <label htmlFor="nickname">Nickname</label>
        <input type="text" id="nickname" name="nickname" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" />
        <label htmlFor="type">Type</label>
        <input type="text" id="type" name="type" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />

        <button type="submit"></button>
    </form>
    )
}

export default Register