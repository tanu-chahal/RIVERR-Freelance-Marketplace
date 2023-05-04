import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';
import './Message.scss';

const Message = () =>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const {id} = useParams();
    const queryClient = useQueryClient();

    const { isLoading, error, data} = useQuery({
        queryKey: ["messages"],
        queryFn: () =>
         newRequest.get(`/messages/${id}`).then((res) => {
            return res.data;
         }),
     });

     const mutation = useMutation({
        mutationFn: (message) => {
          return newRequest.post(`/messages`, message);
        },
        onSuccess:()=>{
          queryClient.invalidateQueries(["messages"])
        },
        onError: (err) => {
            console.log(err);
          },
      });


     const handleSubmit = (e)=>{
        e.preventDefault();
        mutation.mutate({
            conversationId: id,
            desc: e.target[0].value,
        });
        e.target[0].value = "";
     }

    return (
        <div className='Message'>
            <div className="container">
                <span className="breadcrumbs"><Link to="/messages" className = "link" >MESSAGES</Link> &gt; JOHN DOE &gt;</span>
                {isLoading ? "loading.." : error ? "Oops! Something went wrong.":
                    <div className="messages">
                    {data.map(m =>{
                        return (<div className={m.userId === currentUser._id ? "item owner" : "itemor"}key={m._id}>
                        <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p>{m.desc}</p>
                    </div>)
                })}
                </div>
                }
                <hr/>
                <form className="write" onSubmit={handleSubmit}>
                    <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Message;