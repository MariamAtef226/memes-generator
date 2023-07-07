import { useState } from "react";
import { useEffect } from "react";

export default function Meme() {
  
  let [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    topLeftText: "",
    bottomLeftText: "",
    topRightText: "",
    bottomRightText: "",
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
              placeholder="Text at the top center"
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className=" form-control "
              value={meme.bottomText}
              onChange={changeHandler}
              name="bottomText"
              placeholder="Text at the bottom center"

            />
          </div>
          
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              value={meme.topLeftText}
              onChange={changeHandler}
              name="topLeftText"
              placeholder="Text at the top left"

            />
          </div>
                    
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              value={meme.topRightText}
              onChange={changeHandler}
              name="topRightText"
              placeholder="Text at the top right"

            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className=" form-control "
              value={meme.bottomLeftText}
              onChange={changeHandler}
              name="bottomLeftText"
              placeholder="Text at the bottom left"

            />
          </div>


          <div className="col-md-6">
            <input
              type="text"
              className=" form-control "
              value={meme.bottomRightText}
              onChange={changeHandler}
              name="bottomRightText"
              placeholder="Text at the bottom right"

            />
          </div>

          <button onClick={getMemeImage} className="form-control">
            Get a new meme image 🖼
          </button>
        </div>
      </div>

      <div id="capture" className="meme img-container ms-auto me-auto">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
        <h2 className="meme-text topLeft">{meme.topLeftText}</h2>
        <h2 className="meme-text bottomLeft">{meme.bottomLeftText}</h2>
        <h2 className="meme-text topRight">{meme.topRightText}</h2>
        <h2 className="meme-text bottomRight">{meme.bottomRightText}</h2>
      </div>

    </>
  );
}
