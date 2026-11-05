console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=&q=Hello+There&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

async function getGifs() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const gifs = data.images[0];
  
  const gifButton = document.querySelector("gif-container button"); 
  gifButton.addEventListener("click", async function() {
    for (i = 0 in gifs) {
        gifButton.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
    }''
  });
};

getGifs()