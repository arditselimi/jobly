import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import HomeGuest from "./components/HomeGuest";
import Jobs from "./pages/Jobs";
import Apply from "./components/Apply";
import Categories from "./pages/Categories";

const App = () => {
  const isActive = false;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      {isActive && <Apply />}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
