import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginSignUp from './components/LoginSignup/LoginSignup';
import DigiviewLogo from '../src/pages/digiviewLogo.webp';
import EventDetails from './pages/EventDetails/EventDetails';
import FilterEvents from './pages/FilterEvents/FilterEvents';
import EventList from './pages/EventList/EventList';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-primary fw-semibold'>
            {/* <img src={DigiviewLogo} className="img-fluid" alt="" width="30" height="40"/> */}
            DigiView
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-center w-100'>
              <div className='dropdown'>
              <Nav.Link href='/' className='active text-uppercase'><b>Products</b></Nav.Link>
              <div className='dropdown-content'>
                <a href='#'>link1</a>
                <a herf="#">Link2</a>
                <a herf="#">Link3</a>
              </div>
              </div>
              <Nav.Link href='/menu' className='text-uppercase'><b>Blog</b></Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'><b>About</b></Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'><b>Contact</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-center w-100'>
            <div className='headerBtns flex'>
                <button className='btn loginBtn'>
                    <a href="LoginSignUp">Login/Sign Up</a>
                </button >
            </div>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/LoginSignUp' element={<LoginSignUp/>} />
        <Route path='/list' element={<EventList/>} />
        <Route path='/find-events'element={<FilterEvents/>} />
        <Route path= '/events/:id'element={<EventDetails/>} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Ionut Cora</p>
      </footer>
    </div>
  );
}

export default App;