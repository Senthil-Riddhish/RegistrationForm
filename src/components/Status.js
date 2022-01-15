import Swal from 'sweetalert2';
const status=(Status,message)=>{
    switch(Status){
        case 200:{
            return(
                Swal.fire(
                    'Good job!',
                    'successfully Logged In'
                  ))
        }
        case 400:{
            return(
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Bad Request',
                  })
            )
        }
        case 401:{
            return(
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: message
                  })
            )
        }
    }
};
export default status;