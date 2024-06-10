import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";

import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";

import Contact from "./components/Contact/Contact";

import { useContext ,  useState, useEffect } from "react";
import { themeContext } from "./Context";
import FooterNew from "./components/FooterNew/FooterNew"
import Loading from "./components/Loading/Loading"
import Form from "./components/Form/Form"

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
     {isLoading ? (
       <Loading  />
     ) : (
       <>
       <Navbar />
      <Intro />
      <Services />
    
      <Works />
      <Portfolio />

     
      {/* <Contact /> */}
      <Form/>
      
      <FooterNew/>
       
      
    </>
       
       // Your application content goes here

     )}
   </div>
 );

      
   
}

export default App;
