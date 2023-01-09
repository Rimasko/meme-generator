import React from 'react';

export default function Meme() {

  const [meme, setMeme] = React.useState({
    image: "http://i.imgflip.com/1bij.jpg",
    bottomText: "И сделать мем!",
    topText: "Нельзя просто так взять",
  })
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    async function getMemes()  {
        const result = await fetch("https://api.imgflip.com/get_memes")
        const data = await result.json()
        setAllMemes(data.data.memes)
    }
    getMemes()
    }, [])

  function getMemeImage(){ 
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const image_url = allMemes[randomNumber].url
    setMeme((prevMeme) => ({...prevMeme, image: image_url}))
  }

    function handeleChange(event){
        const {name, value} = event.target
        setMeme((prevMeme) => ({...prevMeme, [name]: value}))
    }

    return (
        <main className="main">
            <div className="form">
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handeleChange}
                />
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handeleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                    > Get a new meme 
                </button>
            </div>
            <div className="meme">
                <img src={meme.image} alt="meme" className="meme--image"/>
                <h1 className="meme--text top">{meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
            </div>
        </main>
    )
}