import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" className='logo'>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} to="/">Home</Link>
            <Nav.Link href="#company" className={activeLink === 'company' ? 'active navbar-link' : 'navbar-link'} to="/company">CryptoSharePay</Nav.Link>
            <Nav.Link href="#apis" className={activeLink === 'apis' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Apis')}>API Reference</Nav.Link>
            <Link className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} to="/transactions">Payments</Link>
          </Nav>
          <span className="navbar-text">
            <HashLink to='#connect'>
              <button className="vvd"><span>Sign Up</span></button>
            </HashLink>
          </span>
          <span className="language-text">
            <HashLink to=''>
              <button className=""><span>English</span></button>
            </HashLink>
          </span>
          <span className="language-text">
            <HashLink to=''>
              <button className=""><span>Spanish</span></button>
            </HashLink>
          </span>
          <span className="language-text">
            <HashLink to=''>
              <button className=""><span>Portuguese</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
