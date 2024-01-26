import PhotoPCertifNomProfile from "./PhotoTweet-cert-photoP";
import ImageParagraphReation from "./ImageParagraphReaction";
import ParagraphReaction from "./ParagraphReaction";
import axios from "axios";
import { useEffect, useState } from "react";

function Publications() {
  const [user, setuser] = useState("");
  const [post, setpost] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let user = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setuser(user[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        let post = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setpost(post[0].body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="tweets">
        <div className="titre_certifie_paragr_IconTweet">
          <PhotoPCertifNomProfile
            photoDuProfil="https://picsum.photos/200?random=1604084613000"
            NomDucompte={user}
            Certification={`@${user}.7m`}
          />
          <ImageParagraphReation
            ImagePublie="https://picsum.photos/200?random=1315091604496158720"
            TextPublie={post}
            Commentaire="57"
            Retweet="144"
            Likes="187"
            Partages="2"
          />

          <PhotoPCertifNomProfile
            photoDuProfil="https://picsum.photos/200?random=1604084613000"
            NomDucompte="Betsaleel"
            Certification="@Betsaleel.1m"
          />
          <ImageParagraphReation
            ImagePublie="https://picsum.photos/200?random=1322252819299135488"
            TextPublie="Salut les gars"
            Commentaire="89"
            Retweet="2"
            Likes="12"
            Partages="43"
          />

          <PhotoPCertifNomProfile
            photoDuProfil="https://picsum.photos/200?random=1604084613000"
            NomDucompte="Betsaleel"
            Certification="@Betsaleel.1m"
          />
          <ImageParagraphReation
            ImagePublie="https://picsum.photos/200?random=1322252819299135488"
            TextPublie="Salut les gars"
            Commentaire="89"
            Retweet="2"
            Likes="12"
            Partages="43"
          />

          <PhotoPCertifNomProfile
            photoDuProfil="https://picsum.photos/200?random=1604084613000"
            NomDucompte="Betsaleel"
            Certification="@Betsaleel.1m"
          />
          <ImageParagraphReation
            ImagePublie="https://picsum.photos/200?random=1322252819299135488"
            TextPublie="Salut les gars"
            Commentaire="89"
            Retweet="2"
            Likes="12"
            Partages="43"
          />
        </div>
      </div>
    </>
  );
}

export default Publications;
