import React from "react";
import "./Gig.scss";
import Slider from "infinite-react-carousel";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useParams, Link, useNavigate} from "react-router-dom";
import Reviews from "../../components/reviews/Reviews.jsx"
import getCurrentUser from "../../utils/getCurrentUser.js";

const currentUser = getCurrentUser();

const Gig = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: [id],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
      enabled: !!userId,
  });

const createConvo = async ()=>{
  try {
    let convId;
    currentUser?._id ? convId = userId + currentUser._id : convId = false;
    let convo; 
    if(convId){
      convo = await newRequest.get(`/conversations/single/${convId}`);
    }
    if(!convo){const conversation = {
      to: userId,
    }
    convo = await newRequest.post(`/conversations/`, conversation);
    }
    navigate(`/message/${convo.data.id}`);
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="Gig">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong :("
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
            <Link to="/" className="link">RIVERR </Link> &gt; <Link to={`/gigs?cat=${data.cat}`} className="link">GIGS </Link>&gt;
            </span>
            <h1>{data.title}</h1>
            {
            isLoadingUser ? "loading" : errorUser ? "Oops! Something went wrong." : 
            <div className="user">
              <img
                className="pp"
                src={dataUser.img || "/img/profile.png"}
                alt="profile pic"
              />
              <span>{dataUser.username}</span>
              {!isNaN(data.totalStars/data.starNumber) &&
              <div className="stars">
                {Array(Math.round(data.totalStars/data.starNumber)).fill().map((item,i)=>{
                  return (<img src="/img/star.png" alt="*" key={i} />);
                 })}
                <span> {Math.round(data.totalStars/data.starNumber)}</span>
              </div>}
            </div>
            }
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => {
                return <img key={img} src={img} alt="gig img" />;
              })}
            </Slider>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {
            isLoadingUser ? "loading" : errorUser ? "Oops! Something went wrong." : 
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="user">
                <img
                  src={dataUser.img || "/img/profile.png"}
                  alt="profile pic"
                />
                <div className="info">
                  <span>{dataUser.username}</span>
                  {!isNaN(data.totalStars/data.starNumber) &&
              <div className="stars">
                {Array(Math.round(data.totalStars/data.starNumber)).fill().map((item,i)=>{
                  return (<img src="/img/star.png" alt="*" key={i} />);
                 })}
                <span> {Math.round(data.totalStars/data.starNumber)}</span>
              </div>}
                 {!currentUser?.isSeller && <button onClick={createConvo}>Contact Me</button>}
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{dataUser.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{dataUser.desc}</p>
              </div>
            </div>
            }
            
            <Reviews gigId={id}/>

          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>₹ {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map(feature => {
                return (<div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>)
              })}
            </div>
            {currentUser?._id!=data.userId && <Link className="link" to={`/pay/${id}`}>
            <button>Continue</button>
            </Link>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
