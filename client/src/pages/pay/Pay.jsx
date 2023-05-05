import React from 'react';
import './Pay.scss';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {useState, useEffect, useParams} from 'react-router-dom';
import newRequest from "../../utils/newRequest.js";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm.jsx";

const stripePromise = loadStripe("pk_test_51N4MfNSIIzej0wuliBswlG8Hc2J1RIvuCRIiwiGOEV3DYqKpVIme7My0KHWE5SX5KShlKE5YCysP2xqQKwg3cxwM000KujqJAK");


const pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();
  useEffect(()=>{
    const makeRequest = async ()=>{
      try {
        const res = newRequest.post(`/orders/create-payment-intent/${id}`);
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  },[])

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='Pay'>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default pay