import './App.css';
import Header from './components/Header';
import TopMid from './components/TopMid';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div className="App">
      <Header/>
      <TopMid/>
      <AboutUs/>
      <Services/>
      <Gallery/>
      <ContactUs/>
    </div>
  );
}

export default App;
