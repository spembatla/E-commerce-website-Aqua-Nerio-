
import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import {BrowserRouter, Route , Routes} from "react-router-dom";
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Domestric } from './components/domestric/domestric';
import { Industrial } from './components/industrial/industrial';
import { Commercial } from './components/commerical/commerical';
import { Login } from './components/login/login';
import { Cart } from './components/cart/cart';

function App() {
  return (
    <div >
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/domestric-ro' element={<Domestric/>}/>
        <Route path='/industrial-ro' element={<Industrial/>}/>
        <Route path='/commercial-ro' element={<Commercial/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
