import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';
import './Messages.scss';
import moment from "moment";

const Messages = () =>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const { isLoading, error, data} = useQuery({
        queryKey: ["conversations"],
        queryFn: () =>
         newRequest.get(`/conversations`).then((res) => {
            return res.data;
         }),
     });

     const queryClient = useQueryClient();

     const mutation = useMutation({
        mutationFn: (id) => {
          return newRequest.put(`/conversations/${id}`);
        },
        onSuccess:()=>{
          queryClient.invalidateQueries(["conversations"])
        },
        onError: (err) => {
            console.log(err);
          },
      });


     const handleRead = (id)=>{
        return mutation.mutate(id);
     }

    return (
        <div className='Messages'>
            {isLoading ? "loading..." : error? "Something went wrong :(" :
            <div className="container">
                <div className="title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(c=>{
                        return (<tr className={((currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer)) ?
                            "active" : ""} key={c.id}>
                        <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                        <td><Link to={`/message/${c.id}`} className='link'>{c?.lastMessage?.substring(0,90)}...</Link></td>
                        <td>{moment(c.updatedAt).fromNow()}</td>
                        <td>{(currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer) &&
                        (<button onClick={()=>handleRead(c.id)}>Mark as Read</button>)}</td>
                    </tr>)
                    })
                    }
                    </tbody>
                </table>
            </div>
            }
        </div>
    )
}

export default Messages;