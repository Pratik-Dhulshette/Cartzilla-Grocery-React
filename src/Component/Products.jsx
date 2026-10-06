import { Container, Row, Col, Card, Button } from "react-bootstrap";
import peanut from "../assets/Products/peanuts butter.jpg";
import jam from "../assets/Products/blueberry jam.jpg";
import dryfruit from "../assets/Products/dryfruit.jpg";
import coldDrink from "../assets/Products/colddrinks.jpg";

function Products() {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Popular Products</h2>

      <Row>
        <Col md={3}>
          <Card>
            <Card.Img
              src={peanut}
              style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>Peanut Butter</Card.Title>
              <Card.Text>₹250</Card.Text>
              <Button variant="success">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img
              src={jam}
              style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>Blueberry Jam</Card.Title>
              <Card.Text>₹180</Card.Text>
              <Button variant="success">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img
              src={dryfruit}
              style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>Dry Fruits</Card.Title>
              <Card.Text>₹450</Card.Text>
              <Button variant="success">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img
              src={coldDrink}
              style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>Cold Drink</Card.Title>
              <Card.Text>₹60</Card.Text>
              <Button variant="success">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;