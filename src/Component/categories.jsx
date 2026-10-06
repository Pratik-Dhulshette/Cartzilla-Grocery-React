import { Container, Row, Col, Card } from "react-bootstrap";

import vegetable from "../assets/Products/bag.vege.jpg";
import fruit from "../assets/Products/nvegetable.jpg";
import doodh from "../assets/Products/doodh1.jepg.jpg";
import bakery from "../assets/Products/newBeakery.jpg";

function Categories() {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">Shop by Category</h2>

      <Row>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img
              src={vegetable}
              style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body className="text-center">
              <Card.Title>Vegetables</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card>
            <Card.Img
              src={fruit}
              style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body className="text-center">
              <Card.Title>Fruits</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card>
            <Card.Img
              src={doodh}
              style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body className="text-center">
              <Card.Title>Dairy</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card>
            <Card.Img
              src={bakery}
              style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body className="text-center">
              <Card.Title>Bakery</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;  