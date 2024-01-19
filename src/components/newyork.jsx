function Newyork() {
  return (
    <>
      <div className="newyokConteneur">
        <div className="newyorkTimeImage">
          <img
            className="photo_pt"
            src="https://picsum.photos/200?random=1604299903000"
            alt=""
          />
        </div>
        <p className="newyork">
          The New York Times <br />{" "}
          <span className="nbre_de_tweet ">@nyTimes</span>
        </p>
        <img src="../src/Icons/Verified.svg" alt="" />
        <button type="button" className="Follow">
          Follow
        </button>
      </div>
    </>
  );
}

export default Newyork;
