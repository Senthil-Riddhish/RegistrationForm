import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Header/Header.css';
import Container from "react-bootstrap/esm/Container";
function CardsSlider() {
    return (
        <div style={{ background: "#f5f5f5" }}>
            <Container fluid="xl" style={{ marginTop: "1rem"}}>
                <Carousel fade variant="dark" indicators={false} style={{ padding: "0rem"}}>
                    <Carousel.Item>
                        <Card>
                            <CardGroup style={{
                                border: "2px solid blue", display: "flex", gap: "10px", justifyContent: "space-around", background: "#f5f5f5"
                            }}>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-1.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./ven.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} className="button-6" />
                                </Card>
                            </CardGroup>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <CardGroup style={{
                                border: "2px solid blue", display: "flex", gap: "10px", justifyContent: "space-around", background: "grey"
                            }}>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-1.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./ven.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} className="button-6" />
                                </Card>
                            </CardGroup>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card>
                            <CardGroup style={{
                                border: "2px solid blue", display: "flex", gap: "10px", justifyContent: "space-around", background: "grey"
                            }}>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-1.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./ven.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} />
                                </Card>
                                <Card style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 10px 60px -10px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" }}>
                                    <Card.Img variant="top" src="./hero-2.jpg" style={{ width: "100%", height: "100%", objectFit: "fill" }} className="button-6" />
                                </Card>
                            </CardGroup>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}
export default CardsSlider;