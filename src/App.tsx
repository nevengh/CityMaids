import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/MainPage/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Header from "./components/Header/Header";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
