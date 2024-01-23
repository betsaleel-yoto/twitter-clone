import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import ProfilVersionFinale from "./components/Pages/ProfilVersionFinal";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Profile" element={<ProfilVersionFinale />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
