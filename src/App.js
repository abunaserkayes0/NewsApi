import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Features from "./Components/Features/Features";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import Videos from "./Components/Videos/Videos";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
