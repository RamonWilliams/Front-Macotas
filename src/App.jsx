import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Mascotas from "./pages/Mascotas/Mascotas"
import Profile from "./pages/Profile/Profile";
import NewMascota from "./pages/NewMascota/NewMascota";
import EditMascota from "./pages/EditMascota/EditMascota";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const App = () => {
  return
  <div>
    <Router>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newmascota" element={<NewMascota />} />
        <Route path="/editmascota" element={<EditMascota />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>



      <Footer />
    </Router>

  </div>;

};

export default App;