import Navbar from "./components/navbar";
import Header from "./components/header";
import Offer from "./components/offer";
import Service from "./components/service";
import Footer from "./components/footer";


function home() {
    return (
      <>
     
      <div className="home">
        <Navbar/>
        <Header/>
        <Offer/>
        <Service/>
        <Footer/>
      </div>
      </>
    );
  }
  
  export default home;