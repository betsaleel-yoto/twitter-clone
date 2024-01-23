import Footer from "../Footer";
import Tweets from "../tweets";
import Publications from "../Publications";
import Nav from "../Nav";
import "/src/App.css";
function Home() {
  return (
    <>
      {/* <!-- grande div contenant la navbar le body ainsi la partie search --> */}
      <div className="nav_body_search">
        {/* <!-- navbar --> */}
        <Nav />
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

export default Home;
