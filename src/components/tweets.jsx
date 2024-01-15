function Tweets() {
  return (
    <>
      <div className="tweet_editor">
        <div className="profile_text">
          <div className="photo_text"></div>
          <textarea name="" id="" className="Textarea_Tweets">
            What's Happening?
          </textarea>
        </div>
        <div className="groupe_icon">
          <div>
            <img src="../src/Icons/Media.svg" alt=""></img>
            <img src="../src/Icons/Gif.svg" alt=""></img>
            <img src="../src/Icons/Poll.svg" alt=""></img>
            <img src="../src/Icons/Emoji.svg" alt=""></img>
            <img src="../src/Icons/Schedule.svg" alt="" />
          </div>

          <div>
            <button type="button" className="button_body">
              Tweets
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tweets;
