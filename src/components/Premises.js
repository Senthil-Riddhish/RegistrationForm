import CardHeader from "react-bootstrap/esm/CardHeader";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import Container from "react-bootstrap/esm/Container";
function Premises() {
    return (
        <Container fluid="lg" style={{marginTop:"4rem"}}>
        <CardGroup className="rows">
            <div className="d-flex justify-content-center rowss" style={{gap:"10px"}}>
                <Card >
                    <Card.Img variant="top" src="./hero-1.jpg" className="brk"/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Movie 1
                        </Card.Text>
                    </Card.Body>
                </Card>
                
           
                <Card>
 
                    <Card.Img variant="top" src="./hero-2.jpg"/>
           
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            Movie 2
                        </Card.Text>
                    </Card.Body>
                </Card>
               
                <Card>
  
                    <Card.Img variant="top" src="./mh.jpg" />
              
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        Movie 3
                        </Card.Text>
                    </Card.Body>
                </Card>
              
                <Card>
 
                    <Card.Img variant="top" src="./ven.jpg" />
               
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        Movie 4
                        </Card.Text>
                    </Card.Body>
                </Card>
               
                <Card>
       
                    <Card.Img variant="top" src="./jl.jpg" />
               
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        Movie 5
                        </Card.Text>
                    </Card.Body>
                </Card>
        

            </div>
        </CardGroup>
        </Container>
    );
}
export default Premises;