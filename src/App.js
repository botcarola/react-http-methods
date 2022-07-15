import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ContactMe from './components/ContacMe';
import Nav from './components/Nav';
import Footer from './components/Footer';


const App = () => {

  return (
    <BrowserRouter>
        <Nav />    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
