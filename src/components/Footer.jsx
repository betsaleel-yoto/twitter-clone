import Newyork from "./newyork";
import Trends from "./trends";
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

        <div className="Trends_whoFollow">
          <div className="Trends">
            <div className="Titre_et_Image">
              <h2>Trends for you</h2>
              <img src="../src/Icons/Settings.svg" alt="" />
            </div>
            <div className="differente_tendance">
              <p className="TrendingTurkey">Trending in Turkey</p>
              <img src="../src/Icons/More-2.svg" alt="" />
            </div>
            <p className="Squid">
              #SQUID <br />
              <span className="nbre_de_tweet">2,066 Tweets</span>
            </p>
            <Trends />
            <Trends />
            <Trends />
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
            <Newyork />
            <Newyork />
            <Newyork />
            <button type="button" className="button_more">
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
