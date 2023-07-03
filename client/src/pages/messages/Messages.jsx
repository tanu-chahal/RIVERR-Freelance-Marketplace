import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';
import './Messages.scss';
import moment from "moment";

const fetchUserData = async (reqId) => {
    try {
      const response = await newRequest.get(`/users/${reqId}`);
      return response.data.username;
    } catch (error) {
      return 'errored';
    }
  };

const Messages = () =>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [userNames, setUserNames] = useState([]);

    const { isLoading, error, data} = useQuery({
        queryKey: ["conversations"],
        queryFn: () =>
         newRequest.get(`/conversations`).then((res) => {
            return res.data;
         }),
     });

    useEffect(() => {
        if (data) {
            const fetchUserNames = async () => {
              const promises = data.map((m) => {
                const reqId = currentUser.isSeller ? m.buyerId : m.sellerId;
                return fetchUserData(reqId);
              });
              const names = await Promise.all(promises);
              setUserNames(names);
            };
        
            fetchUserNames();
          }
      }, [data, currentUser.isSeller]);

     const queryClient = useQueryClient();

     const mutation = useMutation({
        mutationFn: (id) => {
          return newRequest.put(`/conversations/${id}`);
        },
        mutationKey: ['conversation'],
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
                    {data.map((c,index)=>{
                    
                        return (<tr className={((currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer)) ?
                            "active" : ""} key={c.id}>
                        <td>{userNames[index]}</td>
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