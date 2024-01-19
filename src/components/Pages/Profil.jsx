import Nav from "../Nav";
import Footer from "../Footer";

function Profile() {
  return (
    <>
      <div className="Profile">
        <div className="box_profil_banner">
          <img src="" alt="" />
        </div>
        <div className="box_Info_profil">
          <div className="photo_profil_et_button">
            <div className="photo_info">
              <img src="" alt="" className="Photo_Pageprofil" />
              <h2>Bradley</h2>
              <p>
                @bradley_ <br />
                Joined January 2024
              </p>
            </div>

            <button type="button">Edit profil</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
