import React from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";

const Review = ({review}) => {

    const { isLoading, error, data } = useQuery({
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    });

  return (
    <div className="Review">
      {isLoading ? "loading..." : error ? "Something went wrong :(" :
        <div className="user">
        <img
          src= {data.img || "/img/profile.png"}
          alt=""
          className="pp"
        />
        <div className="info">
          <span>{data.username}</span>
          <div className="country">
            <span>{data.country}</span>
          </div>
        </div>
      </div>}
      <div className="stars">
        {Array(review.star).fill().map((item,i)=>{
          return <img src="/img/star.png" alt="*" key={i} />
        })}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="like" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="dislike" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
