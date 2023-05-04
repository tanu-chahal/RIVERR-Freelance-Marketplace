import React from 'react'
import {useState} from 'react';
import './Register.scss'
import upload from "../../utils/upload.js";
import newRequest from "../../utils/newRequest.js";
import {useNavigate} from 'react-router-dom'

const Register = () =>{
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        img: "",
        country: "",
        isSeller: false,
        desc: "",
    });
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setUser((prev) =>{
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    const handleSeller = (e) =>{
        setUser((prev) =>{
            return {...prev, isSeller: e.target.checked}
        })
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let url ="";
        if(file){url = await upload(file)};
        try {
            await newRequest.post("/auth/register", {...user, img:url});
            const res = await newRequest.post("/auth/login",{ username: user.username,password: user.password }); 
            localStorage.setItem("currentUser",JSON.stringify(res.data));
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='Register'>
            <form onSubmit={handleSubmit}>
                <div className="left">
                    <h1>Create a new account</h1>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" placeholder="tanu-chahal" onChange={handleChange}/>

                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='email' onChange={handleChange} />

                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange}/>

                    <label htmlFor="">Profile Picture</label>
                    <input type="file" placeholder="Add Profile Picture" onChange={e =>setFile(e.target.files[0])}/>

                    <label htmlFor="">Country</label>
                    <input type="text" name="country" placeholder="Bharat" onChange={handleChange}/>

                    <button type='submit'>Register</button>
                </div>

                <div className="right">
                    <h1>I want to become a seller</h1>
                    <div className="toggle">
                        <label htmlFor="">Activate the seller account</label>
                        <label className='switch'>
                            <input type="checkbox" placeholder="Activate the seller account" onChange={handleSeller} />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <label htmlFor="">Phone Number</label>
                    <input type="text" name="phone" placeholder="+91 xxxxx-xxxxx" onChange={handleChange} />
                    <label htmlFor="">Description</label>
                    <textarea placeholder='A short description for yourself' name="desc" id="" cols="30" rows="10" onChange={handleChange}></textarea>
                </div>
            </form>
        </div>
    )
}

export default Register;