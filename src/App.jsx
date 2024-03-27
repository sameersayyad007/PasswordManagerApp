import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  
  Route,
  
  BrowserRouter,
  Routes
} from "react-router-dom";
import ContactUs from './pages/ContactUs';

function App() {
  

  return (
    <BrowserRouter>
     
     <Navbar/>
     <div className="min-h-[87vh]">
     <Manager/>
     </div>
     <Footer/>


<Routes>
<Route exact path='/contactus' element={<ContactUs/>} ></Route>


</Routes>


    </BrowserRouter>
  )
}

export default App
