import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { Cart4, Heart, Wallet2, PersonSquare, BagFill } from 'react-bootstrap-icons';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice.js';
import { logout } from '../slices/authSlice';
// import { adminLogout } from '../slices/adminSlice.js';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // const { adminInfo } = useSelector((state) => state.admin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall();
      dispatch(logout());
      dispatch(adminLogout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
<header>
  <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
    <Container>
      <img className='NavImg' onClick={() => navigate('/')} src="https://www.smartdepot.co.in/images/smart-depot1.png" alt="" />
      {userInfo ? (
        <>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown title={<><PersonSquare className='Icon' /></>} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item onClick={() => navigate('/profile')} variant='outline-success border-0'>{userInfo.name}</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </>
      ) : ("")}
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {userInfo ? (
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Button onClick={() => navigate('/wishlist')} variant='outline-success border-0'><Heart className='Icon' /></Button>
                <Button onClick={() => navigate('/cart')} variant='outline-success border-0'><Cart4 className='Icon' /></Button>
                <Button onClick={() => navigate('/orders')} variant='outline-success border-0'><BagFill className='Icon' /></Button>
                <Button onClick={() => navigate('/wallet')} variant='outline-success border-0'><Wallet2 className='Icon' /></Button>
              </Nav>
            </Navbar.Collapse>
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
              <LinkContainer to='/adminLogin'>
                <Nav.Link>
                  <FaSignInAlt /> Admin Panel
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