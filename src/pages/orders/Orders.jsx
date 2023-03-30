import React from 'react'
import './Orders.scss'

const Orders = () =>{
    const currentUser = {
        id: 1,
        username: "Tanu Chahal",
        isSeller: true
    }
    return (
        <div className='Orders'>
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>Christiano Ronaldo</td>
                        <td><img className='contact' src="/img/message.png" alt="Contact" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig2</td>
                        <td>45</td>
                        <td>Donald Trumph</td>
                        <td><img className='contact' src="/img/message.png" alt="Contact" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig3</td>
                        <td>100</td>
                        <td>Smith Collins</td>
                        <td><img className='contact' src="/img/message.png" alt="Contact" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig4</td>
                        <td>25</td>
                        <td>John Doe</td>
                        <td><img className='contact' src="/img/message.png" alt="Contact" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig5</td>
                        <td>70</td>
                        <td>Chris Gails</td>
                        <td><img className='contact' src="/img/message.png" alt="Contact" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig6</td>
                        <td>85</td>
                        <td>Farhan Akthar</td>
                        <td><img className='contact' src="/img/message.png" alt="Contact" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Orders;