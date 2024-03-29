import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <div className="header ">
          <img src="../src/Icons/Twitter.svg" alt="" className="Twitter_icon" />

          <div className="nav_icon">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <p className="Hov">
                <img src="../src/Icons/Home.svg" alt="" />
                <span className="menu"></span>Home
              </p>
            </Link>

            <p className="Hov">
              <img src="../src/Icons/Explore/Fill.svg" alt="" />
              <span className="menu">Explore</span>
            </p>
            <p className="Hov">
              <img src="../src/Icons/Notifications.svg" alt="" />
              <span className="menu">Notifications</span>
            </p>
            <p className="Hov">
              <img src="../src/Icons/Messages.svg" alt="" />
              <span className="menu">Messages</span>
            </p>
            <p className="Hov">
              <img src="../src/Icons/Bookmarks.svg" alt="" />
              <span className="menu">
                Bookmarks<span></span>
              </span>
            </p>
            <p className="Hov">
              <img src="../src/Icons/Lists.svg" alt="" />
              <span className="menu">Lists</span>
            </p>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Profile"
              className="Link"
            >
              <p className="Hov">
                <img src="../src/Icons/Profile.svg" alt="" />
                <span className="menu">Profile</span>
              </p>
            </Link>
            <p className="Hov">
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
    </>
  );
}

export default Nav;
