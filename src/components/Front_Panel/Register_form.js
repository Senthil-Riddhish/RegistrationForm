import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { corel } from "../../firebase-config";
import { addDoc } from "firebase/firestore";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';
function Register_form() {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const SignupSubmit = async (req, res) => {
        try {
            const data = {
                firstname: firstname,
                lastname: lastname,
                username: username
            };
            console.log(data);
            addDoc(corel, data);
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    ).then(res=>{ window. location. reload()})
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${errorMessage}`
                    })
                });
            console.log("Successfully registered");
        } catch (error) {
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${errorMessage}`
            })
        }
    }
    return (
        <div className="divs2">
            <div className="divs3">
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Fullname">
                            <Form.Control type="text" placeholder="_" onChange={e => setfirstname(e.target.value)} value={firstname} />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Lastname">
                            <Form.Control type="text" placeholder="_" onChange={e => setlastname(e.target.value)} value={lastname} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="g-2" style={{ marginTop: "1.5rem" }}>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Username">
                            <Form.Control type="text" placeholder="_" onChange={e => setusername(e.target.value)} value={username} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ width: "100%", textAlign: "center", color: "#00ffff", fontFamily: 'Merriweather', fontSize: "1rem" }}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ width: "100%", textAlign: "center", color: "#00ffff", fontFamily: 'Merriweather', fontSize: "1rem" }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                </Form.Group>
                <div>
                    <div className="bt2" style={{ textAlign: "center" }}><button className="button-27" role="button" style={{ width: "6rem" }} onClick={SignupSubmit}>Signup</button></div>
                </div>
            </div>
        </div>
    );
};
export default Register_form;