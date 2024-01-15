function Publications() {
  return (
    <>
      <div className="tweets">
        <div className="titre_certifie_paragr_IconTweet">
          <div className="photoTweet_certif">
            <div className="photo_pt"></div>
            <p>
              CNN
              <span className="certififie">
                <img src="../src/Icons/Verified.svg" alt="" />
              </span>
              @CNN.7m
            </p>
          </div>
          <img src="" alt="" className="tweet_image" />
          <p className="Tweet_text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            incidunt veritatis dicta corrupti atque praesentium culpa dolorem
            nisi placeat ut consequuntur repudiandae, ratione aliquid
            necessitatibus quisquam rerum dolorum illum dignissimos.
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
        </div>
      </div>
    </>
  );
}

export default Publications;
