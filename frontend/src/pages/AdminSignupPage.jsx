import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer.jsx';
import Loader from '../components/Loader.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAdminSignupMutation } from '../slices/adminApiSlice.js';
import { adminSetCredentials } from '../slices/adminSlice.js';
import { toast } from 'react-toastify';

const AdminSignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [adminSignup, { isLoading }] = useAdminSignupMutation();

  const {adminInfo} = useSelector((state) => state.admin);

  useEffect(() => {
    if (adminInfo) {
      navigate('/adminHome');
    }
  }, [navigate, adminInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await adminSignup({ name, email, password }).unwrap();
        console.log();
        dispatch(adminSetCredentials({ ...res }));
        navigate('/adminLogin');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <FormContainer>
      <h1 className='text-center'>Admin Panel</h1>
      <h3 className='text-center'>Sign Up</h3>      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        {isLoading && <Loader />}

        <Button type='submit' variant='primary' className='mt-3'>
          Sign Up
        </Button>

      </Form>

      <Row className='py-3'>
        <Col>
          Already have an account? <Link to={`/adminLogin`}>Admin Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default AdminSignupPage;