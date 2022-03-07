//Buscador de artistas
//Me pintas el nombre del artista y una foto

var getArtist = document.getElementById("getArtist");
var search = document.getElementById("search");
var artistList = document.getElementById("artistList");

const type = 'artist';
const token =
  'BQA6jpwA3flAXXFapw9n7uy_IQHUuIj9rndU3Jrp_tSwbnJpVRtlWZAi68i8Z4gFoXd86TcmkcggR6hmr0xr5_yGgdIvQd1j64opnXqFZytLPj8WFSqvb_YDAjg9qjsJZ1R4vsC7dB2UVStlGjg9ihr8GcLX8ezOyQQ';

search.addEventListener("click", function () {
  console.log(`Artist ${getArtist.value}`)
  fetch(`https://api.spotify.com/v1/search?q=${getArtist.value}&type=${type}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => res.json())
  .then((artist) => artist.artists)
  .then(({items}) => {
    items.forEach(element => {
      console.log(element.name)
      var artistResult = document.createElement("div");
      artistResult.classList.add("artist-results");
      var image = document.createElement('img');
      var url = "";
      if (element.images != 0) {
        url = element.images[1].url;
        image.src = `${url}`;
        console.log(`ver ${image}`)
      } else {
        url = "No hay imagen para mostar: ";
        artistResult.innerText = `${url}`;
      }
      console.log(url)
      artistResult.innerText += element.name;
      artistList.appendChild(artistResult);
      artistResult.appendChild(image);
    });
  })
  getArtist.value = "";
  artistList.innerHTML = "";
})