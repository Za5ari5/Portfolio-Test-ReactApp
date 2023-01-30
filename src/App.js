import logo from './logo.svg';
import About from './components/About';
import Info from './components/Info';
import Interests from './components/Interests';
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="App">
      <nav className='nav'>
      <Info />
      <About />
      <Interests />
      <Footer />
      </nav>
    </div>
  );
}


