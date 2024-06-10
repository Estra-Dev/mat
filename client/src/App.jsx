import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Nav from "./components/Nav";
import Survey from "./pages/Survey";
import Oat from "./pages/Oat";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/oat" element={<Oat />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
