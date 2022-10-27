import Footer from "./Footer";
import Navbar from "./NavBar";
import Duvidas from "./BannerDuvidas";
import Perguntas from "./BannerPerguntas";


function Gx() {
  return (
    <div className="App">
      <Navbar/>
      <Perguntas/>
      <Duvidas/>
      <Footer/>
    </div>
  );
}

export default Gx;
