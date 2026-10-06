import { Container, Row, Col, Button } from "react-bootstrap";

function PromoSection() {
  return (
    <Container className="py-5">
      <Row className="bg-success text-white p-4 rounded align-items-center">
        <Col>
          <h2>Fresh Groceries at Best Price</h2>
          <p>Get fresh products delivered to your home.</p>
        </Col>

        <Col className="text-end">
          <Button variant="light">Shop Now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PromoSection;