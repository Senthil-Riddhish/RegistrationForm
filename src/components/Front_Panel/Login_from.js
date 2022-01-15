import Form from 'react-bootstrap/Form';
import Button from '@restart/ui/esm/Button';
import './Front_panel.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase-config";
const auth = getAuth(app);
function Login_form() {
    let navigate = useNavigate();
    function call(){
        navigate("/user_page");
    }
    const [Email, setEmail] = useState("");
    const [Pass, setPassword] = useState("");
    const submitclick = async (req, res) => {
        signInWithEmailAndPassword(auth, Email, Pass)
            .then((userCredential) => {
                console.log(userCredential);
                const activeDiv = document.querySelector('.bt1');
                const activeDivs = document.querySelector('.bt2');
                const actDivs = document.querySelector('.bt3');
                activeDiv.classList.remove('show');
                activeDivs.classList.remove('show');
                activeDiv.classList.add('hidden');
                activeDivs.classList.add('hidden');
                actDivs.classList.remove('hidden');
                actDivs.classList.add('show');
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
                call();
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text:`${errorMessage}`
                })
            });
    }
    function Email_func(e) {
        setEmail(e.target.value);
    }
    function Pass_func(e) {
        setPassword(e.target.value);
    }
    return (
        <div className="divs">
            <div className="divs1">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ width: "100%", textAlign: "center", color: "#00ffff", fontFamily: 'Merriweather', fontSize: "1.5rem" }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={Email_func} value={Email} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{ width: "100%", textAlign: "center", color: "#00ffff", fontFamily: 'Merriweather', fontSize: "1.5rem" }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={Pass_func} value={Pass} />
                    </Form.Group>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <Button variant="primary" onClick={submitclick}>Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login_form;