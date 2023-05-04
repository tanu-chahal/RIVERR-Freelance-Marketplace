import React from "react";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import {useNavigate} from 'react-router-dom';

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) =>{
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId+buyerId;
    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (error) {
      if(error.respone.status === 404){
      const res = await newRequest.post(`/conversations`,{to: currentUser.isSeller ? buyerId : sellerId});
      }
      navigate(`/message/${res.data.id}`);
    }
    
  }

  return (
    <div className="Orders">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong :("
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
             <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
              </tr>
            </thead>
            <tbody>
            {data.map((order) => {
              return (
                <tr key={order._id}>
                  <td>
                    <img className="img" src={order.img} alt="" />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>
                      <img
                        className="contact"
                        src="/img/message.png"
                        alt="Contact"
                        onClick={()=>handleContact(order)}
                      />
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
