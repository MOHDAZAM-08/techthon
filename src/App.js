import './App.css';
import Body from './component/Body';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './component/About';
// import photo from './img/body.jpg'

function App(img) {
  return (
    <>
      <Router>
        <div className="img">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route exact path="/About" element={<About />} />
            {/* <Route exact path="/" element={<Sec />} /> */}
          </Routes>
          
        </div>

        {/* <div className="img">
          <Routes>
          </Routes>
        </div> */}
      </Router>
    </>
  );
}

export default App;
