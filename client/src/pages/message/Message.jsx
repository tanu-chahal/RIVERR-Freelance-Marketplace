import React from 'react'
import {Link} from 'react-router-dom'
import './Message.scss'

const Message = () =>{
    return (
        <div className='Message'>
            <div className="container">
                <span className="breadcrumbs"><Link to="/messages" className = "link" >MESSAGES</Link> &gt; JOHN DOE &gt;</span>
                <div className="messages">
                    <div className="item">
                        <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores laborum sapiente totam qui cum officiis doloremque magnam rem voluptatum vero accusantium, delectus facere illo expedita optio. Atque, ad inventore. Neque enim quisquam inventore ut necessitatibus suscipit quod accusantium vel ipsam esse. Nulla, officia iure!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>Thank you very much for reaching out to me. I would love to hear more about the project.</p>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores laborum sapiente totam qui cum officiis doloremque magnam rem voluptatum vero accusantium, delectus facere illo expedita optio. Atque, ad inventore. Neque enim quisquam inventore ut necessitatibus suscipit quod accusantium vel ipsam esse. Nulla, officia iure!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis dolorum cum iste mollitia quidem deserunt. Placeat repellat, in explicabo magni esse sequi deserunt laboriosam voluptas numquam quas ullam sint beatae dolorum natus deleniti aspernatur assumenda tenetur necessitatibus, nisi, eius labore accusamus eligendi ad libero.</p>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores laborum sapiente totam qui cum officiis doloremque magnam rem voluptatum vero accusantium, delectus facere illo expedita optio. Atque, ad inventore. Neque enim quisquam inventore ut necessitatibus suscipit quod accusantium vel ipsam esse. Nulla, officia iure!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>Thank you very much for reaching out to me. I would love to hear more about the project.</p>
                    </div>
                </div>
                <hr/>
                <div className="write">
                    <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message;