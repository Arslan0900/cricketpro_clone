import React from "react";
import style from "./card.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  // Function to handle card click and navigate to a newSinglePage with the card's title as a parameter
  const handleCardClick = () => {
    // Navigate to the newSinglePage with the card's source ID as a parameter
    navigate(`/newSinglePage/${item.source.id}`);
  };
  return (
    <>
      <div onClick={handleCardClick} className={style.card}>
        <img src={item.urlToImage} className={style.card_image} alt="..." />
        <div className={style.card_body}>
          <p className={style.card_text}>{item.title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
