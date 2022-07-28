import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/js/NavBar"
import FooterMain from './components/js/FooterMain';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <NavBar />
      <FooterMain />
    </>
  );
}

export default App;
