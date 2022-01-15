import { Outlet, Link, useParams } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import './Front_panel.css';
const auth = getAuth(app);
function Front_panel() {
    let navigate = useNavigate();
    const call = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully Logout',
            showConfirmButton: false,
            timer: 1500
          })
        navigate("/login");
    }
    const logout = () => {
        try {
            const activeDiv = document.querySelector('.bt1');
            const activeDivs = document.querySelector('.bt2');
            const actDivs = document.querySelector('.bt3');
            activeDiv.classList.remove('hidden');
            activeDivs.classList.remove('hidden');
            activeDiv.classList.add('show');
            activeDivs.classList.add('show');
            actDivs.classList.remove('show');
            actDivs.classList.add('hidden');
            signOut(auth);
            console.log("Signout");
            call();
        } catch (error) {
            console.log("Error");
        }
    }
    return (
        <div id="upperdiv">
            <div className="images">
                <div className="imagediv"></div>
            </div>
            <div className="name" style={{ backgroundColor: "transparent" }}>STREAMIFY</div>
            <div className="bt1" style={{ position: "absolute", top: "10px" }}><button className="button-27" role="button"><Link to={`/login`}>Login</Link></button></div>
            <div className="bt2" style={{ position: "absolute", top: "10px" }}><button className="button-27" role="button"><Link to={`/Register`}>Signup</Link></button></div>
            <div className="bt3 hidden" style={{ position: "absolute", top: "10px" }} onClick={logout}><button className="button-27" role="button">Logout</button></div>
            <Outlet />
        </div>
    );
};
export default Front_panel;
