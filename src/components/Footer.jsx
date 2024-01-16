function Footer() {
  return (
    <>
      <div className="partie_search">
        <div className="input_search">
          <img src="../src/Icons/Search.svg" alt="" />
          <textarea name="" id="" className="Textarea_search">
            Search Twitter
          </textarea>
        </div>

        <div className="Trends">
          <div className="Titre_et_Image">
            <h2>Trends for you</h2>
            <img src="../src/Icons/Settings.svg" alt="" />
          </div>
          <div className="differente_tendance">
            <p>Trending in Turkey</p>
            <img src="../src/Icons/More-2.svg" alt="" />
          </div>
          <p className="Squid">
            #SQUID <br />
            <span className="nbre_de_tweet">2,066 Tweets</span>
          </p>

          <button
            type="button"
            id="PremierButtonFooter"
            className="button_more"
          >
            Show More
          </button>
        </div>

        <div className="partie_whoToFollow">
          <h2>Who to follow</h2>
          <div className="newyokConteneur">
            <div className="newyorkTimeImage">
              <img src="" alt="" />
            </div>
            <p className="newyork">The New York Times</p>
            <img src="../src/Icons/Verified.svg" alt="" />
            <button type="button" className="Follow">
              Follow
            </button>
          </div>

          <button type="button" className="button_more">
            Show More
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
