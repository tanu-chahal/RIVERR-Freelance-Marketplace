import React from "react";
import "./Reviews.scss";
import Review from "../review/Review.jsx";
import { useQuery, useQueryClient, useMutation} from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";

const Reviews = ({ gigId }) => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });
  
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };

  return (
    <div className="Reviews">
      <h2>Reviews</h2>
      {isLoading
        ? "loading..."
        : error
        ? "Something went wrong :("
        : data.map((review) => {
            return (
              <Review key={review._id} review={review} />
              // <hr />
            );
          })}
      <div className="add">
        <h3>Add a review</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Write your review here" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
