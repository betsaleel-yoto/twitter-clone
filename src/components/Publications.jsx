import PhotoPCertifNomProfile from "./PhotoTweet-cert-photoP";
import ImageParagraphReation from "./ImageParagraphReaction";
import axios from "axios";
import { useEffect, useState } from "react";

function Publications() {

  // utilisateur 1
  
  const [user1, setuser1] = useState("");
  const [post1, setpost1] = useState("");
  const [date1, setdate1] = useState("");
  const [Photoprofil1, setPhotoprofil1] = useState("");
  const [imagePublie1, setimagePublie1] = useState("");
  const [nbreLike1, setnbreLike1] = useState("");
  const [repost1, setrepost1] = useState("");
  const [nbreComment, setnbreComment] = useState(0);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let user = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setuser1(user[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let post = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setpost1(post[0].body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let date = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setdate1(date[0].Joined);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let PhotoDeprofil = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setPhotoprofil1(PhotoDeprofil[0].thumbnailProfil);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let imagePublie = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setimagePublie1(imagePublie[0].thumbnailUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let nbrerepost = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setrepost1(nbrerepost[0].repost);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let nbrelike = response.data.filter(function (personne) {
          return personne.id === 1;
        });
        setnbreLike1(nbrelike[0].like);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/comments")
      .then((response) => {
        let nbredecomment = response.data;
        setnbreComment(nbredecomment.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // utilisateur 2

  const [user2, setuser2] = useState("");
  const [post2, setpost2] = useState("");
  const [date2, setdate2] = useState("");
  const [Photoprofil2, setPhotoprofil2] = useState("");
  const [imagePublie2, setimagePublie2] = useState("");
  const [nbreLike2, setnbreLike2] = useState("");
  const [repost2, setrepost2] = useState("");

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let user = response.data.filter(function (personne) {
          return personne.id === 2;
        });
        setuser2(user[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let post = response.data.filter(function (personne) {
          return personne.id === 2;
        });
        setpost2(post[0].body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let date = response.data.filter(function (personne) {
          return personne.id === 2;
        });
        setdate2(date[0].Joined);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let PhotoDeprofil = response.data.filter(function (personne) {
          return personne.id === 2;
        });
        setPhotoprofil2(PhotoDeprofil[0].thumbnailProfil);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let imagePublie = response.data.filter(function (personne) {
          return personne.id === 2;
        });
        setimagePublie2(imagePublie[0].thumbnailUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let nbrerepost = response.data.filter(function (personne) {
          return personne.id === 2;
        });
        setrepost2(nbrerepost[0].repost);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let nbrelike = response.data.filter(function (personne) {
          return personne.id === 2;
        });
        setnbreLike2(nbrelike[0].like);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // utilisateur 3

  const [user3, setuser3] = useState("");
  const [post3, setpost3] = useState("");
  const [date3, setdate3] = useState("");
  const [Photoprofil3, setPhotoprofil3] = useState("");
  const [imagePublie3, setimagePublie3] = useState("");
  const [nbreLike3, setnbreLike3] = useState("");
  const [repost3, setrepost3] = useState("");

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let user = response.data.filter(function (personne) {
          return personne.id === 3;
        });
        setuser3(user[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let post = response.data.filter(function (personne) {
          return personne.id === 3;
        });
        setpost3(post[0].body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let date = response.data.filter(function (personne) {
          return personne.id === 3;
        });
        setdate3(date[0].Joined);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let PhotoDeprofil = response.data.filter(function (personne) {
          return personne.id === 3;
        });
        setPhotoprofil3(PhotoDeprofil[0].thumbnailProfil);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let imagePublie = response.data.filter(function (personne) {
          return personne.id === 3;
        });
        setimagePublie3(imagePublie[0].thumbnailUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let nbrerepost = response.data.filter(function (personne) {
          return personne.id === 3;
        });
        setrepost3(nbrerepost[0].repost);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let nbrelike = response.data.filter(function (personne) {
          return personne.id === 3;
        });
        setnbreLike3(nbrelike[0].like);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // utilisateur 4

  const [user4, setuser4] = useState("");
  const [post4, setpost4] = useState("");
  const [date4, setdate4] = useState("");
  const [Photoprofil4, setPhotoprofil4] = useState("");
  const [imagePublie4, setimagePublie4] = useState("");
  const [nbreLike4, setnbreLike4] = useState("");
  const [repost4, setrepost4] = useState("");

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let user = response.data.filter(function (personne) {
          return personne.id === 4;
        });
        setuser4(user[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let post = response.data.filter(function (personne) {
          return personne.id === 4;
        });
        setpost4(post[0].body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let date = response.data.filter(function (personne) {
          return personne.id === 4;
        });
        setdate4(date[0].Joined);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/users")
      .then((response) => {
        let PhotoDeprofil = response.data.filter(function (personne) {
          return personne.id === 4;
        });
        setPhotoprofil4(PhotoDeprofil[0].thumbnailProfil);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let imagePublie = response.data.filter(function (personne) {
          return personne.id === 4;
        });
        setimagePublie4(imagePublie[0].thumbnailUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let nbrerepost = response.data.filter(function (personne) {
          return personne.id === 4;
        });
        setrepost4(nbrerepost[0].repost);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/amare53/twiterdb/posts")
      .then((response) => {
        let nbrelike = response.data.filter(function (personne) {
          return personne.id === 4;
        });
        setnbreLike4(nbrelike[0].like);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="tweets">
        <div className="titre_certifie_paragr_IconTweet">
          {/* utilisateur 1 */}
          <PhotoPCertifNomProfile
            photoDuProfil={Photoprofil1}
            NomDucompte={user1}
            Certification={`@${user1}.${date1}`}
          />
          <ImageParagraphReation
            ImagePublie={imagePublie1}
            TextPublie={post1}
            Commentaire={nbreComment}
            Retweet={repost1}
            Likes={nbreLike1}
            Partages="2"
          />

          {/* utilisateur 2 */}

          <PhotoPCertifNomProfile
            photoDuProfil={Photoprofil2}
            NomDucompte={user2}
            Certification={`${user2}.${date2}`}
          />
          <ImageParagraphReation
            ImagePublie={imagePublie2}
            TextPublie={post2}
            Commentaire={nbreComment}
            Retweet={repost2}
            Likes={nbreLike2}
            Partages="43"
          />
          {/* utilisateur 3 */}
          <PhotoPCertifNomProfile
            photoDuProfil={Photoprofil3}
            NomDucompte={user3}
            Certification={`${user3}.${date3}`}
          />
          <ImageParagraphReation
            ImagePublie={imagePublie3}
            TextPublie={post3}
            Commentaire={nbreComment}
            Retweet={repost3}
            Likes={nbreLike3}
            Partages="43"
          />
          {/* utilisateur 4 */}

          <PhotoPCertifNomProfile
            photoDuProfil={Photoprofil4}
            NomDucompte={user4}
            Certification={`${user4}.${date4}`}
          />
          <ImageParagraphReation
            ImagePublie={imagePublie4}
            TextPublie={post4}
            Commentaire={nbreComment}
            Retweet={repost4}
            Likes={nbreLike4}
            Partages="43"
          />
        </div>
      </div>
    </>
  );
}

export default Publications;
