import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import "./Message.scss";
import getCurrentUser from "../../utils/getCurrentUser.js";

const currentUser = getCurrentUser();

const Message = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const len = currentUser._id.length;
  const sellerId = id.substring(0, len);
  const buyerId = id.substring(len, id.length);

  const {
    isLoading: isLoadingBuyer,
    error: errorBuyer,
    data: dataBuyer,
  } = useQuery({
    queryKey: ["buyer", buyerId],
    queryFn: () =>
      newRequest.get(`/users/${buyerId}`).then((res) => {
        return res.data;
      }),
  });

  const {
    isLoading: isLoadingSeller,
    error: errorSeller,
    data: dataSeller,
  } = useQuery({
    queryKey: ["seller", sellerId],
    queryFn: () =>
      newRequest.get(`/users/${sellerId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="Message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGES
          </Link>{" "}
          &gt;{" "}
          {currentUser.isSeller
            ? isLoadingBuyer
              ? "loading"
              : errorBuyer
              ? "Oops! Error"
              : dataBuyer.username
            : isLoadingSeller
            ? "loading"
            : errorSeller
            ? "Oops! Error"
            : dataSeller.username}{" "}
          &gt;
        </span>
        {isLoading ? (
          "loading.."
        ) : error ? (
          "Oops! Something went wrong."
        ) : (
          <div className="messages">
            {data.map((m) => {
              return (
                <div
                  className={
                    m.userId === currentUser._id ? "item owner" : "item"
                  }
                  key={m._id}
                >
                  <img
                    src={
                      (m.userId === currentUser._id
                        ? currentUser.isSeller
                          ? isLoadingSeller
                            ? ""
                            : dataSeller.img
                          : isLoadingBuyer
                          ? ""
                          : dataBuyer.img
                        : currentUser.isSeller
                        ? isLoadingBuyer
                          ? ""
                          : dataBuyer.img
                        : isLoadingSeller
                        ? ""
                        : dataSeller.img) || "/img/profile.png"
                    }
                    alt=""
                  />
                  <p>{m.desc}</p>
                </div>
              );
            })}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
