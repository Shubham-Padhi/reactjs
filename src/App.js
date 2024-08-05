import './App.css';

import Header from './components/Header.jsx';

import Home from './components/Home.jsx';
import Service from './components/Service.jsx';
import About from './components/About.jsx';
import BlogPage from './components/BlogPage.jsx';
import PartImg from './components/PartImg.jsx';
import LogoBanner from './components/LogoBanner.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
// import ModelPop from './components/ModelPop.jsx';





function App() {
  
  return (      
    
    
    <div className="App">
      
    
  <Header />
  {/* <ModelPop/> */}
  
  <Home/>
  <Service/>
  <PartImg/>
  <About/>

 <LogoBanner/>
  <BlogPage/>
  <Contact/>
  <Footer/> 
 
  
  

 

  

    </div>
  );
}

export default App;
