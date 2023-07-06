import memesData from "../memesData.js";
import { useState } from "react";

export default function Header() {
  let [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    let ind = Math.round(Math.random(0, 1) * 100);

    setMemeImage(memesData.data.memes[ind].url);
  }

  return (
    <>
      <div className="d-flex align-items-center p-3 form-container ms-auto me-auto">
        <div className="row g-3 w-100 justify-content-center ms-auto me-auto">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              value="Text at the top"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className=" form-control "
              value="Text at the bottom"
            />
          </div>
          <button onClick={getMemeImage} className="form-control">
            Get a new meme image 🖼
          </button>
        </div>
      </div>
      <div className="img-container ms-auto me-auto">

        <img className={memeImage==""?'d-none':''} src={memeImage} alt="meme-image"/>
      </div>
    </>
  );
}
