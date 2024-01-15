// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
function App() {
  return (
    <>
      {/* <!-- grande div contenant la navbar le body ainsi la partie search --> */}
      <div className="nav_body_search">
        {/* <!-- navbar --> */}
        <nav>
          <div className="header ">
            <img
              src="../cloneT/src/Icons/Twitter.svg"
              alt=""
              className="Twitter_icon"
            />

            <div className="nav_icon">
              <p>
                <img src="../cloneT/src/Icons/Home.svg" alt="" />
                <span className="menu"></span>Home
              </p>
              <p>
                <img src="../cloneT/src/Icons/Explore/Fill.svg" alt="" />
                <span className="menu">Explore</span>
              </p>
              <p>
                <img src="../cloneT/src/Icons/Notifications.svg" alt="" />
                <span className="menu">Notifications</span>
              </p>
              <p>
                <img src="../cloneT/src/Icons/Messages.svg" alt="" />
                <span className="menu">Messages</span>
              </p>
              <p>
                <img src="../cloneT/src/Icons/Bookmarks.svg" alt="" />
                <span className="menu">
                  Bookmarks<span></span>
                </span>
              </p>
              <p>
                <img src="../cloneT/src/Icons/Lists.svg" alt="" />
                <span className="menu">Lists</span>
              </p>
              <p>
                <img src="../cloneT/src/Icons/Profile.svg" alt="" />
                <span className="menu">Profile</span>
              </p>
              <p>
                <img src="../cloneT/src/Icons/More.svg" alt="" />
                <span className="menu">More</span>
              </p>
              <button type="button" className="button_nav">
                Tweet
              </button>
            </div>

            {/* <!-- photo de profil du bas et more --> */}

            <div className="nom_utilisateur_bas">
              <div className="espace_photo"></div>
              <div className="textBas_photo">
                <p>
                  Bradley Ortiz
                  <img src="../cloneT/src/Icons/Private.svg" alt="" />
                  <img
                    src="../cloneT/src/Icons/More-2.svg"
                    alt=""
                    className="more_2_nav"
                  />
                </p>
                <p className="sous_titre_bas">bradley_</p>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- le body -->
      <!-- la partie post ou tweet --> */}
        <div className="timeline">
          {/* <!-- premère div principale du body --> */}

          <div className="Home_starIcon">
            <p>
              <span className="Page_title">Home</span>
              <span className="top_tweets">
                <img src="../cloneT/src/Icons/Timeline-Prop.svg" alt="" />
              </span>
            </p>
          </div>

          {/* <!--  Deuxieme div Pp du body--> */}

          <div className="tweet_editor">
            <div className="profile_text">
              <div className="photo_text"></div>
              <p>What's Happening?</p>
            </div>
            <div className="groupe_icon">
              <div>
                <img src="../cloneT/src/Icons/Media.svg" alt=""></img>
                <img src="../cloneT/src/Icons/Gif.svg" alt=""></img>
                <img src="../cloneT/src/Icons/Poll.svg" alt=""></img>
                <img src="../cloneT/src/Icons/Emoji.svg" alt=""></img>
                <img src="../cloneT/src/Icons/Schedule.svg" alt="" />
              </div>

              <div>
                <button type="button" className="button_body">
                  Tweets
                </button>
              </div>
            </div>
          </div>

          {/* <!-- troisième div principale du body--> */}

          <div className="tweets">
            <div className="titre_certifie_paragr_IconTweet">
              <div className="photoTweet_certif">
                <div className="photo_pt"></div>
                <p>
                  CNN{" "}
                  <span className="certififie">
                    <img src="../cloneT/src/Icons/Verified.svg" alt="" />
                  </span>
                  @CNN.7m
                </p>
              </div>
              <img src="" alt="" className="tweet_image" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam incidunt veritatis dicta corrupti atque praesentium
                culpa dolorem nisi placeat ut consequuntur repudiandae, ratione
                aliquid necessitatibus quisquam rerum dolorum illum dignissimos.
              </p>
              <p className="reaction">
                <span>
                  <img src="../cloneT/src/Icons/Reply.svg" alt="" />
                  <span className="Nombre">57</span>
                </span>
                <span>
                  <img src="../cloneT/src/Icons/Retweet.svg" alt="" />
                  <span className="Nombre">144</span>
                </span>
                <span>
                  <img src="../cloneT/src/Icons/React.svg" alt="" />
                  <span className="Nombre">184</span>
                </span>
                <span>
                  <img src="../cloneT/src/Icons/Share.svg" alt="" />
                  <span className="Nombre">09</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* <!-- la partie search --> */}

        <div className="partie_search">
          <div className="input_search">
            <img src="../cloneT/src/Icons/Search.svg" alt="" />
            <input type="search" placeholder="Search Twitter" />
          </div>

          <div className="Trends">
            <div className="Titre_et_Image">
              <h1>Trends for you</h1>
              <img src="../cloneT/src/Icons/Settings.svg" alt="" />
            </div>
            <div className="differente_tendance">
              <p>Trending in Turkey</p>
              <img src="../cloneT/src/Icons/More-2.svg" alt="" />
            </div>
            <p className="Squid">
              #SQUID <br />
              <span className="nbre_de_tweet">2,066 Tweets</span>
            </p>

            <button type="button" className="button_more">
              Show More
            </button>
          </div>

          <div className="partie_whoToFollow">
            <h1>Who to follow</h1>
            <div className="newyokConteneur">
              <div className="newyorkTimeImage">
                <img src="" alt="" />
              </div>
              <p className="newyork">The New York Times</p>
              <img src="../cloneT/src/Icons/Verified.svg" alt="" />
              <button type="button" className="Follow">
                Follow
              </button>
            </div>

            <button type="button" className="button_more">
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
