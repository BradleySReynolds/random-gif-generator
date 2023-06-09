console.log("-----------------gif generator------------------");

const image = document.querySelector("img");
const textInput = document.querySelector("input[type=text]");
const searchBtn = document.querySelector("button");

const getGif = () => {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=6LN0c3Escs3EZbH7UO1JOWdtJCHcT5Pn&q=${textInput.value}&limit=25&offset=0&rating=g&lang=en`,
    {
      mode: "cors",
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let random = Math.floor(Math.random() * 24);
      image.src = res.data[random].images.original.url;
    });
};

searchBtn.addEventListener("click", getGif);
