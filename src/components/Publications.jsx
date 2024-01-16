import PhotoPCertifNomProfile from "./PhotoTweet-cert-photoP";
import ImageParagraphReation from "./ImageParagraphReaction";
import ParagraphReaction from "./ParagraphReaction";
function Publications() {
  return (
    <>
      <div className="tweets">
        <div className="titre_certifie_paragr_IconTweet">
          <PhotoPCertifNomProfile NomDucompte="CNN" Certification="@CNN.7m" />
          <ImageParagraphReation
            TextPublie="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, consequatur? Beatae quasi quisquam deserunt consequuntur architecto illum neque provident consequatur, veniam, reprehenderit sunt quo obcaecati aliquid totam eaque tempore iure."
            Commentaire="57"
            Retweet="144"
            Likes="187"
            Partages="2"
          />
        </div>
      </div>
    </>
  );
}

export default Publications;
