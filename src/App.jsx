import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import ProfilVersionFinale from "./components/Pages/ProfilVersionFinal";
import Login from "./components/Pages/login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/Profile" element={<ProfilVersionFinale />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
