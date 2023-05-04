import React from 'react'
import {Link} from 'react-router-dom'
import './MyGigs.scss'

const MyGigs = () =>{
    return (
        <div className='MyGigs'>
            <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to ="/add"><button>Add New Gig</button></Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td><img className='delete' src="/img/delete.png" alt="Delete" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig2</td>
                        <td>45</td>
                        <td>102</td>
                        <td><img className='delete' src="/img/delete.png" alt="Delete" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig3</td>
                        <td>100</td>
                        <td>140</td>
                        <td><img className='delete' src="/img/delete.png" alt="Delete" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig4</td>
                        <td>25</td>
                        <td>67</td>
                        <td><img className='delete' src="/img/delete.png" alt="Delete" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig5</td>
                        <td>70</td>
                        <td>56</td>
                        <td><img className='delete' src="/img/delete.png" alt="Delete" /></td>
                    </tr>
                    <tr>
                        <td><img className='img' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
                        <td>Gig6</td>
                        <td>85</td>
                        <td>45</td>
                        <td><img className='delete' src="/img/delete.png" alt="Delete" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MyGigs;