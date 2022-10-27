import Footer from "./Footer";
import Navbar from "./NavBar";
import Duvidas from "./BannerDuvidas";
import Perguntas from "./BannerPerguntas";


function LtTelecom() {
  return (
    <div className="App">
      <Navbar/>
      <Perguntas/>
      <Duvidas/>
      <Footer/>
    </div>
  );
}

export default LtTelecom;
