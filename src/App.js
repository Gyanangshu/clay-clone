import './App.css';
import Carousel from './Components/Carousel';
import Clients from './Components/Clients';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ServiceInfo from './Components/ServiceInfo';
import Services from './Components/Services';
import Works from './Components/Works';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Works />
      <ServiceInfo />
      <Carousel />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
