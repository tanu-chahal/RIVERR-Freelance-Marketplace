import newRequest from './newRequest.js';

const checkToken = async () =>{
    try{
        await newRequest.get('/verify');
    }catch(err){
        await newRequest.post("/auth/logout");
        localStorage.setItem("currentUser", null);
    }
     
}

export default checkToken;
