import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import HomeGuest from "./components/HomeGuest";
import HowItWorks from "./components/HowItWorks";
import Jobs from "./pages/Jobs";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
