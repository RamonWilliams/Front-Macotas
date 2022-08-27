
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <section className="home">
      <img src="/src/assets/images/Webs-para-mascotas.jpg" alt="logo" />
      <div className="info">
        <h2>Welcome animal lovers</h2>
        <p>
          Un animal de compañía o mascota es un animal doméstico que se conserva con el propósito de brindar
          compañía o para el disfrute del cuidador. A diferencia de los animales de laboratorio,
          animales para la crianza o ganado, animales para el transporte o animales para el deporte,
          los animales de compañía son conservados para traer beneficios, un beneficio personal.
          Los animales de compañía son seleccionados por su comportamiento, adaptabilidad y por
          su interacción con los humanos, en la que posiblemente se utilicen como herramientas de caza o seguridad.
          Poseer un animal de compañía puede traer beneficios a la salud, ya que el cuidado diario hace olvidar a muchas personas otro tipo de preocupaciones, evita la depresión y nos hace sentir útiles.
          Los animales de compañía más populares son el perro y el gato.
        </p>
        <Link to="/login">Do you have an account? </Link>
      </div>
    </section>


  )
}
export default Home