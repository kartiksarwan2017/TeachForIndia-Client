import {Routes, Route} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Volunteer from "./components/Volunteer/Volunteer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import './App.css';

function App() {
  return (
    <div className="App">

    <Header />
     <Routes>
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/volunteer" element={<Volunteer />} />
        <Route exact path="/home" element={<Home />} />
     </Routes>
    {/* <Footer /> */}

    </div>
  );
}

export default App;
