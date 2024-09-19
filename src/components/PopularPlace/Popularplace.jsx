import Anchorage from "../../assets/images/popular/Anchorage To La Paz.jpg";
import Singapore from "../../assets/images/popular/Discover Singapore.png";
import Kiwiana from "../../assets/images/popular/Kiwiana Panorama.jpg";
import Quito from "../../assets/images/popular/Anchorage To Quito.jpg";
import Cuzco from "../../assets/images/popular/Cuzco To Anchorage.jpg";
import Ushaia from "../../assets/images/popular/Anchorage To Ushuaia.jpg";
import Santiago from "../../assets/images/popular/Anchorage To Santiago.jpg";
import Explorer from "../../assets/images/popular/LA Explorer.jpg";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";

const PopularPlace = () => {
  const popular = [
    {
      id: 0,
      title: "Anchorage To La Paz",
      image: Anchorage,
      location: "La Paz, Bolivia",
      category: ["Rail Tour", "Tour Cruise"],
      days: "2 nights",
      price: 1200000,
      afterdiscount: 0,
      rating: 4.5,
      review: 35,
    },
    {
      id: 1,
      title: "Discover Singapore",
      image: Singapore,
      location: "Singapore",
      category: ["City Tour", "Food Tour"],
      days: "3 nights",
      price: 800000,
      afterdiscount: 0,
      rating: 4.8,
      review: 40,
    },
    {
      id: 2,
      title: "Kiwiana Panorama",
      image: Kiwiana,
      location: "Auckland, New Zealand",
      category: ["Nature Tour", "Wildlife Tour"],
      days: "4 nights",
      price: 1500000,
      afterdiscount: 0,
      rating: 4.9,
      review: 50,
    },
    {
      id: 3,
      title: "Anchorage To Quito",
      image: Quito,
      location: "Quito, Ecuador",
      category: ["Rail Tour", "City Tour"],
      days: "5 nights",
      price: 1800000,
      afterdiscount: 0,
      rating: 4.7,
      review: 45,
    },
    {
      id: 4,
      title: "Cuzco To Anchorage",
      image: Cuzco,
      location: "Cuzco, Peru",
      category: ["Rail Tour", "Adventure Tour"],
      days: "6 nights",
      price: 2000000,
      afterdiscount: 0,
      rating: 4.6,
      review: 42,
    },
    {
      id: 5,
      title: "Anchorage To Ushuaia",
      image: Ushaia,
      location: "Ushuaia, Argentina",
      category: ["Rail Tour", "Wildlife Tour"],
      days: "7 nights",
      price: 2200000,
      afterdiscount: 0,
      rating: 4.8,
      review: 48,
    },
    {
      id: 6,
      title: "LA Explorer",
      image: Explorer,
      location: "European Way,Southampton,United Kingdom",
      category: ["Rail Tour", "Tour Cruise"],
      days: "1 night",
      price: 990000,
      afterdiscount: 0,
      rating: 4,
      review: 22,
    },
    {
      id: 7,
      title: "Anchorage To Santiago",
      image: Santiago,
      location: "Santiago, Chile",
      category: ["Rail Tour", "City Tour"],
      days: "8 nights",
      price: 2500000,
      afterdiscount: 0,
      rating: 4.9,
      review: 55,
    },
  ];

  return (
    <section className="popular">
      <Container>
        <Row>
          <Col md="12">
            <div className="mainheading">
              <h1>Popular Activities </h1>
            </div>
          </Col>
        </Row>
        <Row>
          {popular.map((val, inx) => {
            return (
              <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                <Card className="rounded-2 shadow-sm">
                  <CardImg variant="top" src={val.image} className="img-fluid" />
                  <CardBody>
                    <CardTitle>{val.title}</CardTitle>
                    <CardText>
                      {val.location} | {val.category.join(", ")} | {val.days}
                    </CardText>
                    <CardText>
                      Price: {val.price} | Rating: {val.rating} | Reviews: {val.review}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PopularPlace;

