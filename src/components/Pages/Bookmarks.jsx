import Footer from "../Footer";
import Nav from "../Nav";

function Bookmarks() {
  return (
    <>
      <div className="Nav_Bookmarks_Footer">
        <Nav />
        <Footer />
        <div className="Bookmarks">
          <div className="Bookmarks_h2_p">
            <h2>Bookmarks</h2>
            <p>@bradley_</p>
          </div>
          <div className="Bookmarks_h1_p">
            <h1>Save posts for later</h1>
            <p>Bookmark posts to easily find them again in the future</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookmarks;
