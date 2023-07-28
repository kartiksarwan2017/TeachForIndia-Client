import {Routes, Route} from "react-router-dom";
import AdminRegister from "./components/AdminRegister/AdminRegister";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import VolunteerRegister from "./components/VolunteerRegister/VolunteerRegister";
import VolunteerLogin from "./components/VolunteerLogin/VolunteerLogin";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">

    <Header />
     <Routes>
        <Route exact path="/admin-register" element={<AdminRegister />} />
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route exact path="/volunteer-register" element={<VolunteerRegister />} />
        <Route exact path="/volunteer-login" element={<VolunteerLogin />} />
        <Route exact path="/home" element={<Home />} />
     </Routes>
    <Footer />

    </div>
  );
}

export default App;
