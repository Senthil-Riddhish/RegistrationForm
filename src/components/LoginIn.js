import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import{useState} from 'react';
import status from './Status';
import { Redirect } from 'react-router';
function Login() {
    const[em,setEmail]=useState("");
    const[pass,password]=useState("");
    async function submit() {
        let result={
            "Email":em,
            "Password":pass,
        };
        function clear(){
            setEmail("");
            password("")
        }
        await axios.post('http://localhost:8080/Signin',result).then(respond => {
            console.log("the frontend side is : ",respond);
            //console.log(respond.data.status,respond.data.message,respond.data.token);
           status(respond.data.status,respond.data.message);
           //localStorage.setItem('token',respond.data.token);
           //if(respond.data.status==200){
            clear();
            if(respond.data.status==200)
                return (<Redirect to={window.location.href="/"} />)
        }).catch(respond => {
            status(400,"Request Failed");
        });
}
return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={em}  onChange={(e)=>{setEmail(e.target.value)}} placeholder="abc123@gmail.com"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=>{password(e.target.value)}} placeholder="password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={submit}>
            Submit
        </Button>
    </Form>
)
}
export default Login;