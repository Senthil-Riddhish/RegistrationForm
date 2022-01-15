import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Slider.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
function AllMovies() {
    const[data,Count]=useState([]);
    useEffect(async()=>{
        try {
            const response = await axios.get('http://localhost:8080/movies');
            Count(response.data);
          } catch (error) {
            console.error(error);
          }
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    {data.map((res) =>
                        <Col xs={12} sm={6} md={4} lg={3} style={{ marginTop: "5px" }} id={res._id} key={res._id}>
                            <Card onClick={() => window.location.href = '/movies/' + res._id}>
                                <div className="hei">
                                    <Card.Img variant="top" src={res.Url} style={{ width: "100%", height: "100%" }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{res.MovieName}</Card.Title>
                                    <Card.Text>
                                        {res.Actor}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
};
export default AllMovies;