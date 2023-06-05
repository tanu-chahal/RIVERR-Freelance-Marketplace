import React from 'react'
import {Link} from 'react-router-dom'
import './MyGigs.scss'
import getCurrentUser from '../../utils/getCurrentUser';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';

const MyGigs = () =>{
    const currentUser = getCurrentUser();

    const { isLoading, error, data} = useQuery({
        queryKey: ["myGigs"],
        queryFn: () =>
         newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
            return res.data;
         }),
     });
    
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
      mutationFn: (id) => {
        return newRequest.delete(`/gigs/${id}`);
      },
      onSuccess:()=>{
        queryClient.invalidateQueries(["myGigs"])
      },
      onError: (err) => {
        console.log(err);
      },
    });
    const handleDelete = (id) => {
      mutation.mutate(id);
    };
    return (
        <div className='MyGigs'>
            {isLoading ? "Loading..." : error ? "Oops, something went wrong." : 
                (<div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                   <Link to ="/add"><button>Add New Gig</button></Link>
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Sales</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map(gig =>{
                        return (<tr key={gig._id}>
                            <td><img className='img' src={gig.cover} alt="" /></td>
                            <td>{gig.title}</td>
                            <td>{gig.price}</td>
                            <td>{gig.sales}</td>
                            <td><img className='delete' src="/img/delete.png" alt="Delete" onClick={()=>handleDelete(gig._id)}/></td>
                        </tr>);
                    })}
                    </tbody>
                </table>
            </div>
            )}
        </div>
    )
}

export default MyGigs;