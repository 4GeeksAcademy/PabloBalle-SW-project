import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const LikesBtn = ({ cardName }) => {
    const { store, actions } = useContext(Context);
  
    const handleAddToLikes = () => {
        actions.addCardToLikes(cardName);
      };
  
    const isCardLiked = store.likes.includes(cardName);
  
    return (
      <button className="btn btn-primary" onClick={handleAddToLikes} disabled={isCardLiked}>
        {isCardLiked ? "Liked" : "Like"}
      </button>
    );
  };