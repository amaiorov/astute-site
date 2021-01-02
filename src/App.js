import './App.scss';
import Header from 'pages/Header/Header';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Process from 'pages/Process/Process';
import FAQ from 'pages/FAQ/FAQ';
import Test from 'pages/Test/Test';
import Contact from 'pages/Contact/Contact';
import Footer from 'pages/Footer/Footer';

function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <About />
      <Process />
      <FAQ />
      <Test />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
