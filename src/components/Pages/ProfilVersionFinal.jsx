import Profile from "./Profil";
import Nav from "../Nav";
import Footer from "../Footer";
function ProfilVersionFinale() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}

      {/* <!-- grande div contenant la navbar le body ainsi la partie search --> */}
      <div className="nav_body_search">
        {/* <!-- navbar --> */}
        <Nav />
        {/* <!-- le body -->
      <!-- la partie post ou tweet --> */}
        <div className="timeline">
          {/* <!-- premère div principale du body --> */}
          <Profile />

          {/* <!--  Deuxieme div Pp du body--> */}

          {/* <!-- troisième div principale du body publications--> */}
        </div>

        {/* <!-- la partie search --> */}
        <Footer />
      </div>
    </>
  );
}

export default ProfilVersionFinale;
