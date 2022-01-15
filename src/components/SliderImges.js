import Carousel from "react-bootstrap/Carousel";
import './Header/Header.css';
function Slider() {
    return (
        <div>
            <Carousel fade variant='light' className='rows'>
                <Carousel.Item style={{paddingBottom:"0px"}}>
                    <div style={{width:"100%",border:"2px solid red"}}>
                    <img className="images"
                        src="https://i.pinimg.com/originals/be/d6/3e/bed63e4fa1a1be8cea48b3c630218778.jpg"
                        alt="First slide" 
                    />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{paddingBottom:"0px"}}>
                    <div style={{width:"100%",border:"2px solid red"}}>
                    <img className="images"
                        src="https://wallpaperaccess.com/full/1512312.jpg"
                        alt="First slide" 
                    />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{paddingBottom:"0px"}}>
                    <div style={{width:"100%",border:"2px solid red"}}>
                    <img className="images"
                        src="https://cdn.wallpapersafari.com/58/82/zUgriF.jpg"
                        alt="First slide" 
                    />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
}
export default Slider;