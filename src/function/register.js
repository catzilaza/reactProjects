import axios from "axios";

export const  makeregister = async(data) => {
    await axios.post(process.env.REACT_APP_API + 'register', data)
    .then((response)=>{
        console.log(response);
        console.log('STATUS : ', response.data.status);
        console.log('MESSAGE : ', response.data.message);
    }).catch((err)=> {
        console.log(err);
        
    });;

}

