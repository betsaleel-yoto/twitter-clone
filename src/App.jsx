// import { useState } from 'react'
import Footer from "./components/Footer";
import Tweets from "./components/tweets";
import Publications from "./components/Publications";
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
              src="../src/Icons/Twitter.svg"
              alt=""
              className="Twitter_icon"
            />

            <div className="nav_icon">
              <p>
                <img src="../src/Icons/Home.svg" alt="" />
                <span className="menu"></span>Home
              </p>
              <p>
                <img src="../src/Icons/Explore/Fill.svg" alt="" />
                <span className="menu">Explore</span>
              </p>
              <p>
                <img src="../src/Icons/Notifications.svg" alt="" />
                <span className="menu">Notifications</span>
              </p>
              <p>
                <img src="../src/Icons/Messages.svg" alt="" />
                <span className="menu">Messages</span>
              </p>
              <p>
                <img src="../src/Icons/Bookmarks.svg" alt="" />
                <span className="menu">
                  Bookmarks<span></span>
                </span>
              </p>
              <p>
                <img src="../src/Icons/Lists.svg" alt="" />
                <span className="menu">Lists</span>
              </p>
              <p>
                <img src="../src/Icons/Profile.svg" alt="" />
                <span className="menu">Profile</span>
              </p>
              <p>
                <img src="../src/Icons/More.svg" alt="" />
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
                  <img src="../src/Icons/Private.svg" alt="" />
                  <img
                    src="../src/Icons/More-2.svg"
                    alt=""
                    className="more_2_nav"
                  />
                </p>
                <p className="sous_titre_bas">@bradley_</p>
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
                <img src="../src/Icons/Timeline-Prop.svg" alt="" />
              </span>
            </p>
          </div>

          {/* <!--  Deuxieme div Pp du body--> */}

          <Tweets />

          {/* <!-- troisième div principale du body publications--> */}
          <Publications />
        </div>

        {/* <!-- la partie search --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
