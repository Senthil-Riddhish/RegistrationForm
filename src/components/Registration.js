import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
function Registration() {
    const [emailAddress, emailAddresses] = useState("");
    const [Password, Passwords] = useState("");
    const [username, usernames] = useState("");
    function clearInput() {
        console.log("clearinput");
        emailAddresses("");
        Passwords("");
        usernames("")
    }
    async function UserDetails() {
        let details = {
            "UserName":username,
            "Email":emailAddress,
            "Password":Password
        };
        console.log(details);
        await axios.post("http://localhost:8080/Signup", details).then(res=>{
            if(res.data.status==400){
                Swal.fire(
                    'Good job!',
                    'Successfully Registered',
                    'success'
                  )
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Improper Credentials'
                  })
            }
        }).catch(()=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Try Again'
              })
        });
        clearInput();
    }
    return (
        <div>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={username} onChange={(e) => { usernames(e.target.value) }} type="text" placeholder="Enter UserName" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailAddress} onChange={(e) => { emailAddresses(e.target.value) }} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={Password} onChange={(e) => { Passwords(e.target.value) }} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={UserDetails}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
};
export default Registration;