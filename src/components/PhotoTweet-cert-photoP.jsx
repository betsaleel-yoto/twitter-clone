function PhotoPCertifNomProfile(props) {
  return (
    <>
      <div className="photoTweet_certif">
        <div className="photo_pt">
          <img src={props.photoDuProfil} alt="" />
        </div>
        <p>
          <span className="Nom_de_compte">{props.NomDucompte}</span>
          <span className="certififie">
            <img src="../src/Icons/Verified.svg" alt="" />
          </span>
          <span className="Sous_titre_profil">{props.Certification}</span>
        </p>
      </div>
    </>
  );
}

export default PhotoPCertifNomProfile;
