import { useEffect } from "react";
import { Redirect } from "react-router";
function Checkjson(){
    useEffect(()=>{
        console.log('true');
        if(localStorage.getItem('token')===undefined){
            console.log('true');
        }
    });
    //if(!localStorage.getItem('token')){
        //return (<Redirect to={window.location.href="/Login_in"} />)
    //}
    return(
        <div>
        </div>
    )
}
export default Checkjson;