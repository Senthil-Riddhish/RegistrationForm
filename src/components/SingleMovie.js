import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Slider.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
function SingleMovie() {
    const { id } = useParams();
    const [data, count] = useState([]);
    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/movies/${id}`);
            console.log(response.data);
            count(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3} style={{ marginTop: "5px" }}>
                        <Card>
                            <div className="hei">
                                <Card.Img variant="top" src={data.Url} alt="Sorry" style={{ width: "100%", height: "100%" }} />
                            </div>
                            <Card.Body>
                                <Card.Title>{data.MovieName}</Card.Title>
                                <Card.Text>
                                    {data.Actor}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default SingleMovie;