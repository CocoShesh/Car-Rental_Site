import MainContainer from "./components/MainContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Plan from "./components/plan-section/Plan";
import Banner from "./components/banner/Banner";
import Footer from "./components/Footer/Footer";
import Vehicle from "./Pages/VehicleModels/Vehicle";
import Testimonials from "./Pages/Testimonials/Review";
import Team from "./Pages/OurTeam/Team";
import ContactUs from "./Pages/contact/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Vehicle-Models" element={<Vehicle />}></Route>
          <Route path="/Testimonials" element={<Testimonials />}></Route>
          <Route path="/Our-Team" element={<Team />}></Route>
          <Route path="/Contact" element={<ContactUs />}></Route>
        </Routes>
        <section className="pt-20 bg-white">
          <Banner />
          <Footer />
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
