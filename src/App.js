import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AdminRegister from "./components/AdminRegister/AdminRegister";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import VolunteerRegister from "./components/VolunteerRegister/VolunteerRegister";
import VolunteerLogin from "./components/VolunteerLogin/VolunteerLogin";
import SpecificVolunteer from "./components/SpecificVolunteer/SpecificVolunteer";
import VolunteersList from "./components/VolunteersList/VolunteersList";
import './App.css';
import AddClassroom from "./components/AddClassroom/AddClassroom";




function App() {
  return (
    <div className="App">

    <Header />
     <Routes>
        <Route exact path="/admin-register" element={<AdminRegister />} />
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
        <Route exact path="/volunteer-register" element={<VolunteerRegister />} />
        <Route exact path="/volunteer-login" element={<VolunteerLogin />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/admin/list-of-all-vounteers" element={<VolunteersList />} />
        <Route exact path="/specific-volunteer-details/:volunteerID" element={<SpecificVolunteer />} />
        <Route exact path="/admin/add-classroom" element={<AddClassroom />} />
     </Routes>
    <Footer />

    </div>
  );
}

export default App;
