import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
// import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
      </Routes>
    </div>
  );
}

export default App;
