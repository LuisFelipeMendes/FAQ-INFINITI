import Footer from "./Footer";
import Navbar from "./NavBar";
import Duvidas from "./BannerDuvidas";
import Perguntas from "./BannerPerguntas";


function Guaptel() {
  return (
    <div className="App">
      <Navbar/>
      <Perguntas/>
      <Duvidas/>
      <Footer/>
    </div>
  );
}

export default Guaptel;
