import newRequest from './newRequest.js';

const checkToken =() =>{
    try{
        const user = newRequest.get('/verify');
        if(!user){
        newRequest.post("/auth/logout");}
    }catch(err){
        console.log(err);
        newRequest.post("/auth/logout");
    }
     
}

export default checkToken;
