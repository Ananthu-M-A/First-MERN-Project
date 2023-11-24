import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ViewImage() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default ViewImage;