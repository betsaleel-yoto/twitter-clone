import { useState } from "react";

function ImageParagraphReation(props) {
  const [like, setLike] = useState("../src/Icons/React.svg");
  const [count, setCount] = useState(0);
  const [likeClicked, setLikeClicked] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleLike = () => {
    if (!likeClicked) {
      // Vérifie si le bouton "like" n'a pas encore été cliqué
      setLike("../src/Icons/love-png-30869.png");
      handleCount();
      setLikeClicked(true); // Met à jour l'état pour indiquer que le bouton "like" a été cliqué
    } else {
      // Si le bouton "like" a déjà été cliqué, réinitialise l'état
      setLike("../src/Icons/React.svg");
      setCount(0);
      setLikeClicked(false);
    }
  };

  return (
    <>
      <p className="Tweet_text">{props.TextPublie}</p>
      <img src={props.ImagePublie} alt="" className="tweet_image" />
      <p className="reaction">
        <span className="Principale">
          <img src="../src/Icons/Reply.svg" alt="" />
          <span className="Nombre">{props.Commentaire}</span>
        </span>
        <span className="Principale">
          <img src="../src/Icons/Retweet.svg" alt="" />
          <span className="Nombre">{props.Retweet}</span>
        </span>
        <span className="Lelike Principale">
          <button type="button" className="ButtonLike" onClick={handleLike}>
            <img src={like} alt="" />
          </button>
          <span className="Nombre">{`${props.Likes}${count}`}</span>
        </span>
        <span className="Principale">
          <img src="../src/Icons/Share.svg" alt="" />
          <span className="Nombre">{props.Partages}</span>
        </span>
      </p>
    </>
  );
}

export default ImageParagraphReation;
