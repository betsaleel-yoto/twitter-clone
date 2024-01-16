function ParagraphReaction() {
  return (
    <>
      <p className="Tweet_text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
        incidunt veritatis dicta corrupti atque praesentium culpa dolorem nisi
        placeat ut consequuntur repudiandae, ratione aliquid necessitatibus
        quisquam rerum dolorum illum dignissimos.
      </p>
      <p className="reaction">
        <span>
          <img src="../src/Icons/Reply.svg" alt="" />
          <span className="Nombre">57</span>
        </span>
        <span>
          <img src="../src/Icons/Retweet.svg" alt="" />
          <span className="Nombre">144</span>
        </span>
        <span>
          <img src="../src/Icons/React.svg" alt="" />
          <span className="Nombre">184</span>
        </span>
        <span>
          <img src="../src/Icons/Share.svg" alt="" />
          <span className="Nombre">09</span>
        </span>
      </p>
    </>
  );
}

export default ParagraphReaction;
