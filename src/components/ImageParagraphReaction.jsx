import { useState } from "react";
function ImageParagraphReation(props) {
  const [like, Setlike] = useState("../src/Icons/React.svg");
  const [count, Setcount] = useState(0);
  console.log(like);
  const handerCount = () => {
    Setcount(count + 1);
  };
  const handerLike = () => {
    Setlike("../src/Icons/love-png-30869.png");
    handerCount();
  };
  return (
    <>
      <img src={props.ImagePublie} alt="" className="tweet_image" />
      <p className="Tweet_text">{props.TextPublie}</p>
      <p className="reaction">
        <span>
          <img src="../src/Icons/Reply.svg" alt="" />
          <span className="Nombre">{props.Commentaire}</span>
        </span>
        <span>
          <img src="../src/Icons/Retweet.svg" alt="" />
          <span className="Nombre">{props.Retweet}</span>
        </span>
        <span className="Lelike">
          <button type="button" className="ButtonLike" onClick={handerLike}>
            <img src={like} alt="" />
          </button>
          <span className="Nombre">{count}</span>
        </span>
        <span>
          <img src="../src/Icons/Share.svg" alt="" />
          <span className="Nombre">{props.Partages}</span>
        </span>
      </p>
    </>
  );
}

export default ImageParagraphReation;
