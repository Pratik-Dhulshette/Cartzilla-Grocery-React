import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import milk from "../assets/Products/new milk.jpg";
import juice from "../assets/Products/new juice.jpg";
import oates from "../assets/Products/oates.jpg";
import chips from "../assets/Products/chips.jpg";

function Hero() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="fw-bold">
              Fresh Groceries Delivered to Your Door
            </h1>

            <p className="text-muted">
              Shop fresh fruits, vegetables and daily essentials online.
            </p>

            <Button variant="success">Shop Now</Button>
          </Col>

          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  src={milk}
                  className="d-block w-100 rounded"
                  style={{ height: "400px", objectFit: "cover" }}
                  alt="Milk"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={juice}
                  className="d-block w-100 rounded"
                  style={{ height: "400px", objectFit: "cover" }}
                  alt="Juice"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={oates}
                  className="d-block w-100 rounded"
                  style={{ height: "400px", objectFit: "cover" }}
                  alt="Oates"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={chips}
                  className="d-block w-100 rounded"
                  style={{ height: "400px", objectFit: "cover" }}
                  alt="Chips"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;