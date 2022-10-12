
import './App.css';
import Navbar from './Container/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import {Routes ,Route} from "react-router-dom"
import Contact from './Pages/Contact';
import Successful from './Pages/Success';
import Main from './Container/Main';

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<Main/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/success' element={<Successful/>}/>
      </Routes>
    </>
  );
}

export default App;
