import '../index.css'
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Cart4, Heart, Wallet2, Person, BagFill } from 'react-bootstrap-icons';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <img className='NavImg' onClick={() => navigate('/')} src="https://www.smartdepot.co.in/images/smart-depot1.png" alt="" />
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <Navbar.Collapse className="justify-content-end">
            <Nav> 
              <Button onClick={() => navigate('/profile')} variant='outline-success border-0'><Person className='Icon' /></Button>
              <Button onClick={() => navigate('/wishlist')} variant='outline-success border-0'><Heart className='Icon' /></Button>
              <Button onClick={() => navigate('/cart')} variant='outline-success border-0'><Cart4 className='Icon' /></Button>
              <Button onClick={() => navigate('/orders')} variant='outline-success border-0'><BagFill className='Icon' /></Button>
              <Button onClick={() => navigate('/wallet')} variant='outline-success border-0'><Wallet2 className='Icon' /></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;