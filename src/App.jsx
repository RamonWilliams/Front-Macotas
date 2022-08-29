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
import { JwtContextProvider } from "./context/jwtContext";
import RequireAuth from "./components/RequireAuth/RequireAuth";

const App = () => {
  return (
    <JwtContextProvider>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mascotas" element={<Mascotas />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/newmascota" element={<RequireAuth><NewMascota /></RequireAuth>} />
            <Route path="/editmascota" element={<RequireAuth> <EditMascota /> </RequireAuth>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />



          </Routes>


          <Footer />

        </Router>

      </div>
    </JwtContextProvider>


  )





};

export default App;