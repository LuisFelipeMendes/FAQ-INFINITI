import Footer from "./Footer";
import Navbar from "./NavBar";
import Duvidas from "./BannerDuvidas";
import Perguntas from "./BannerPerguntas";


function Online() {
  return (
    <div className="App">
      <Navbar/>
      <Perguntas/>
      <Duvidas/>
      <Footer/>
    </div>
  );
}

export default Online;
