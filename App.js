import Explainervideo from "./Components/Explainervideo";
import Hero from "./Components/Hero";
import Process from "./Components/Process";
import Transform from "./Components/Transform";
import Media from "./Components/Media";
import Sign from "./Components/Sign";
import Footer from "./Components/Footer";
// for the animation
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Header from "./Components/Header";
import Reveal from 'react-reveal/Reveal';
function App() {
  return (
    <div className="App">
      <Header/>
      <Fade top duration={2000}>
        <Hero/>
      </Fade>
      <Zoom duration={2000}>
        <Explainervideo/>
      </Zoom>
      
      <Fade left duration={2000}>
        <Process/>
      </Fade>
      <Transform/>
      <Fade down duration={2000}>
      <Media/>
      </Fade>
      
      <Sign/>
      <Footer/>
    </div>
  );
}

export default App;
