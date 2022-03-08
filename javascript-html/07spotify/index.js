//Buscador de artistas
//Me pintas el nombre del artista y una foto

var getArtist = document.getElementById("getArtist");
var search = document.getElementById("search");
var artistList = document.getElementById("artistList");

const type = "artist";
const token =
  "BQBsXKUrulOG76MpjrM02zsbaf5SSdcyfT0eDRpDRIKsvaoWJOKS1W8zRq4rtQRGA0WYscrr7k7Fzxo69QO3zShBYpb9Zp8zjFqI92VUoqZ8FwafW1koK6pcMrD8C9ixy3JRBSyXBHkg6Ts";

search.addEventListener("click", function () {
  console.log(`Artist ${getArtist.value}`);
  artistList.innerHTML = "";
  fetch(`https://api.spotify.com/v1/search?q=${getArtist.value}&type=${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then(({ artists: { items } }) => {
      // destructuring
      items.forEach((element) => {
        var artistResult = document.createElement("div");
        artistResult.classList.add("artist-results");
        var image = document.createElement("img");
        var url = "";
        if (element.images.length > 0) {
          // length > 0
          url = element.images[1].url;
          image.src = url; // no need to wrap in string because is already string
        } else {
          image.alt = "No Artist photo"; // image alt text when no url
          artistResult.innerText = "No hay imagen para mostar: ";
        }
        artistResult.innerText += element.name;
        artistList.appendChild(artistResult);
        artistResult.appendChild(image);
        getArtist.value = "";
      });
    });
});
