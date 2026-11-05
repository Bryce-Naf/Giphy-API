console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=zvzba0j4Mogd91XhWtEBKJ7FmYClneo6&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

async function getGifs() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const gif = data.data[0].images.original.url;
  const gifContainer = document.querySelector("#gif-container");
  gifContainer.innerHTML = `<img src="${gif}" class="col-3 mb-3">`;
}

const gifButton = document.querySelector("#fetch-gif-btn");
gifButton.addEventListener("click", getGifs);