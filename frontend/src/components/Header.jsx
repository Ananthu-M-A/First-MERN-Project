// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { Cart4, Heart, Wallet2, Person, BagFill } from 'react-bootstrap-icons';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice.js';
import { logout } from '../slices/authSlice';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>FIRST MERN PROJECT</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>

              {userInfo ? (
                <>
                  <Navbar.Collapse  title={userInfo.name} id='username' className="justify-content-end">
                    <Nav>
                      <Button onClick={() => navigate('/profile')} variant='outline-success border-0'><Person className='Icon' /></Button>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                      <Button onClick={() => navigate('/wishlist')} variant='outline-success border-0'><Heart className='Icon' /></Button>
                      <Button onClick={() => navigate('/cart')} variant='outline-success border-0'><Cart4 className='Icon' /></Button>
                      <Button onClick={() => navigate('/orders')} variant='outline-success border-0'><BagFill className='Icon' /></Button>
                      <Button onClick={() => navigate('/wallet')} variant='outline-success border-0'><Wallet2 className='Icon' /></Button>
                    </Nav>
                  </Navbar.Collapse>
                </>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/signup'>
                    <Nav.Link>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;