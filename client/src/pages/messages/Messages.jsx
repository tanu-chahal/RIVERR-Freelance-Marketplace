import React from 'react'
import {Link} from 'react-router-dom'
import './Messages.scss'

const Messages = () =>{
    const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores laborum sapiente totam qui cum officiis doloremque magnam rem voluptatum vero accusantium, delectus facere illo expedita optio. Atque, ad inventore. Neque enim quisquam inventore ut necessitatibus suscipit quod accusantium vel ipsam esse. Nulla, officia iure!"
    return (
        <div className='Messages'>
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Buyer</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr className='active'>
                        <td>John Doe</td>
                        <td><Link to="/message/123" className='link'>{message.substring(0,90)}...</Link></td>
                        <td>2 hours ago</td>
                        <td><button>Mark as Read</button></td>
                    </tr>
                    <tr className='active'>
                        <td>Ronaldo Trumph</td>
                        <td><Link to="/message/123" className='link'>{message.substring(0,90)}...</Link></td>
                        <td>6 hours ago</td>
                        <td><button>Mark as Read</button></td>
                    </tr>
                    <tr>
                        <td>Christiano Donald</td>
                        <td><Link to="/message/123" className='link'>{message.substring(0,90)}...</Link></td>
                        <td>yesterday</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Chris Evans</td>
                        <td><Link to="/message/123" className='link'>{message.substring(0,90)}...</Link></td>
                        <td>4 days ago</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>John Smilga</td>
                        <td><Link to="/message/123" className='link'>{message.substring(0,90)}...</Link></td>
                        <td>15 days ago</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Farhan Akhtar</td>
                        <td><Link to="/message/123" className='link'>{message.substring(0,90)}...</Link></td>
                        <td>last month</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Messages;