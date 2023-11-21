import React from 'react';
import '../index.css';
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { CartPlus, Eye, Heart } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    "id": 1,
    "name": "Apple Iphone 14 Pro",
    "price": "₹95000",
    "image_url": "https://imgs.search.brave.com/zf-UhjJOA-ViO-hAG1jy3QepdDYV1M17VnHdaFvYAAc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9waWNzL2Fw/cGxlL2FwcGxlLWlw/aG9uZS0xNC1wcm8t/My5qcGc"
  },
  {
    "id": 2,
    "name": "Apple Iphone XS Max",
    "price": "₹25000",
    "image_url": "https://imgs.search.brave.com/m38I_9kXEdNu3fLHmBl5VZiiKIUPSIVyA4PHCcOsH98/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9waWNzL2Fw/cGxlL2FwcGxlLWlw/aG9uZS14cy1tYXgt/NS5qcGc"
  },
  {
    "id": 3,
    "name": "Apple Iphone 12",
    "price": "₹60000",
    "image_url": "https://imgs.search.brave.com/x0NppONoA2EwjuAaNwUzW2fm7HRidPNBbXObB3dlpC4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLWNk/bi5waG9uZWFyZW5h/LmNvbS9pbWFnZXMv/cGhvbmVzLzgwNzU1/LTM1MC9BcHBsZS1p/UGhvbmUtMTIuanBn"
  },
  {
    "id": 4,
    "name": "Apple Iphone 13 Pro",
    "price": "₹90000",
    "image_url": "https://imgs.search.brave.com/Dgq4y9WuFCvxTohzbp7T6F50E5_YwkKA-5pkuYcPf7I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTEzLXByby5qcGc"
  },
  {
    "id": 5,
    "name": "Apple Iphone 11 Pro Max",
    "price": "₹30000",
    "image_url": "https://imgs.search.brave.com/NPIEHqMYulKHSvz7mpZkfzvdVCgsmOaGLN_4AevXHbg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTExLXByby5qcGc"
  },
  {
    "id": 6,
    "name": "Apple Iphone 14 Pro",
    "price": "₹115000",
    "image_url": "https://imgs.search.brave.com/xf2GxDreYQp8E13IDpTbmNJcYw2ZsxT1KLswSY1TCj4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTE0LXByby5qcGc"
  },
  {
    "id": 7,
    "name": "Apple Iphone XR",
    "price": "₹35000",
    "image_url": "https://imgs.search.brave.com/sdKZ97h4fw_DD6T577QgDunmb5HboEkyqiV9KKsgRmw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LXhyLW5ldy5qcGc"
  },
  {
    "id": 8,
    "name": "Apple Iphone X",
    "price": "₹20000",
    "image_url": "https://imgs.search.brave.com/gDbaojdRNSSnGrK_FeOFHq62jEhlxULfZTChPnzIluE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LXguanBn"
  }
];

const Products = () => {
  const navigate = useNavigate();
  return (
    <Container>

      {/* <button onClick={() => {
        Firebase.firestore().collection('products').get().then(snapshot => {
          snapshot.forEach((obj) => {
            console.log(obj.data());
          })
        })
      }} >Load Data</button> */}
      
      <Row className='p-3'>
        {productsData.map((product) => (
          <Col key={product.id}>
            <Card className='text-center mt-3 bg-dark text-light' style={{ width: '15rem', height: '27rem' }}>
              <Card.Img className='ImageProduct p-3' variant="top" src={product.image_url} />
              <Row className='p-1'>
                <Col>
                  <Button onClick={() => navigate('/cart')} className='g-3' variant="dark"><CartPlus className='Icon' /></Button>
                </Col>
                <Col>
                  <Button onClick={() => navigate('/productDetail')} className='g-3' variant="dark"><Eye className='Icon' /></Button>
                </Col>
                <Col>
                  <Button onClick={() => navigate('/wishlist')} className='g-3' variant="dark"><Heart className='Icon' /></Button>
                </Col>
              </Row>
              <Card.Body>
                <Card.Title><h5>{product.name}</h5></Card.Title>
                <Card.Text>
                  <h5>{product.price}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;