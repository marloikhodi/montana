import './App.css';
import { Experiences, Gallery, Home } from './pages';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/experiences" element={< Experiences />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
