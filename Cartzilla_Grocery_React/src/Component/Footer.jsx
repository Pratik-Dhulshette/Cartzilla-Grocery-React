import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col>
            <h5>FreshCart</h5>
            <p>Fresh groceries delivered to your door.</p>
          </Col>

          <Col>
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Shop</p>
            <p>Categories</p>
          </Col>

          <Col>
            <h5>Contact</h5>
            <p>Email: info@freshcart.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;