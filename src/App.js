import {Routes, Route} from "react-router-dom";
import AdminRegister from "./components/AdminRegister/AdminRegister";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import VolunteerLogin from "./components/VolunteerLogin/VolunteerLogin";
import VolunteerRegister from "./components/VolunteerRegister/VolunteerRegister";
import Home from "./components/Home/Home";
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path="/admin-register" element={<AdminRegister />} />
      <Route exact path="/admin-login" element={<AdminLogin />} />
      <Route exact path="/volunteer-register" element={<VolunteerLogin />} />
      <Route exact path="/volunteer-login" element={<VolunteerRegister />} />
      <Route exact path="/home" element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
