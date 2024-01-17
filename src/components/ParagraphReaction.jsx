import { useState } from "react";
function ParagraphReaction(props) {
  const [like, Setlike] = useState("../src/Icons/React.svg");
  console.log(like);
  const handerLike = () => {
    Setlike("../src/Icons/love-png-30869.png");
  };
  return (
    <>
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
          <span className="Nombre">{props.Likes}</span>
        </span>
        <span>
          <img src="../src/Icons/Share.svg" alt="" />
          <span className="Nombre">{props.Partages}</span>
        </span>
      </p>
    </>
  );
}

export default ParagraphReaction;
