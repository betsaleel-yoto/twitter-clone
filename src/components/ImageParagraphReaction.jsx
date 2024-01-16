function ImageParagraphReation(props) {
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
        <span>
          <img src="../src/Icons/React.svg" alt="" />
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

export default ImageParagraphReation;
