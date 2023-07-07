import memesData from "../memesData.js";
import { useState } from "react";
import { useEffect } from "react";

export default function Meme() {
  
  let [meme, setMeme] = useState({
    topText: "Text at the top",
    bottomText: "Text at the bottom",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  let [allMemes, setAllMemes] = useState([]);

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

 

  function getMemeImage() {
    let ind = Math.round(Math.random(0, 1) * allMemes.length);
    setMeme((prev) => ({
      ...prev,
      randomImage: allMemes[ind].url,
    }));
  }

  function changeHandler(event) {
    let { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="d-flex align-items-center p-3 form-container ms-auto me-auto">
        <div className="row g-3 w-100 justify-content-center ms-auto me-auto">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              value={meme.topText}
              onChange={changeHandler}
              name="topText"
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className=" form-control "
              value={meme.bottomText}
              onChange={changeHandler}
              name="bottomText"
            />
          </div>

          <button onClick={getMemeImage} className="form-control">
            Get a new meme image 🖼
          </button>
        </div>
      </div>

      <div className="meme img-container ms-auto me-auto">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

      {/*}
      <div>
        <button>
          Download
          https://stackoverflow.com/questions/52620913/how-to-convert-my-html-div-to-canvas-without-using-html2canvas*
        </button>
      </div>*/}
    </>
  );
}
