import { About } from "./pages/about";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Why } from "./pages/whyRealEstate";
import { How } from "./pages/howItWorks";
import { Screening } from "./pages/screening";
import ScrollToTop from "./component/scrollToTop";
import { Plan } from "./pages/plan";
import { Contact } from "./pages/conatct";
import { Property } from "./pages/property";

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/investor/whyRealEstate" element={< Why/>} />
          <Route path="/investor/howItWorks" element={< How/>} />
          <Route path="/investor/screening" element={< Screening/>} />
          <Route path="/plan" element={< Plan/>} />
          <Route path="/contact" element={< Contact/>} />
          <Route path="/property" element={< Property/>} />        
        </Routes>
      </Router>

      
      
    </div>
  );
}

export default App;
