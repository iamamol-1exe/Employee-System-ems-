import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import { useContext } from "react";
import { DataContext } from "./context/UserContext";
const App = () => {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <div>
      <h1> hello world </h1>
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
