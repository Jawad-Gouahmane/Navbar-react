
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Accueil from "./Accueil";
import Reservation from "./Reservation";
import Contact from "./Contact";
import Shop from "./Shop";
import Evenement from "./Evenement";
import { Layout } from "../Components/Layout";

function AppPages() {
  return (
    <div className=" ">
      <div className="   ">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Evenement" element={<Evenement />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default AppPages;
