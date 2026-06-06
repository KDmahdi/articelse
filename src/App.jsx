
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/pige";
import About from "./pages/about/about";
import Articel from "./pages/articels/Articel";


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element ={<Page1 />} />
      <Route path="/about" element ={<About/>} />
      <Route path="/Articel/:id" element ={<Articel/>}/>
    </Routes>
    
    </div>
    
  );
}

export default App;
