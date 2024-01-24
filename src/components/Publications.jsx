import PhotoPCertifNomProfile from "./PhotoTweet-cert-photoP";
import ImageParagraphReation from "./ImageParagraphReaction";
import ParagraphReaction from "./ParagraphReaction";
function Publications() {
  return (
    <>
      <div className="tweets">
        <div className="titre_certifie_paragr_IconTweet">
          <PhotoPCertifNomProfile
            photoDuProfil="https://picsum.photos/200?random=1604084613000"
            NomDucompte="CNN"
            Certification="@CNN.7m"
          />
          <ImageParagraphReation
            ImagePublie="https://picsum.photos/200?random=1315091604496158720"
            TextPublie="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consequatur? Beatae quasi quisquam deserunt consequuntur architecto illum neque provident consequatur, veniam, reprehenderit sunt quo obcaecati aliquid totam eaque tempore iure."
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
