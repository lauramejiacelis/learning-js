//Buscador de artistas
//Me pintas el nombre del artista y una foto

var getArtist = document.getElementById("getArtist");
var search = document.getElementById("search");
var artistList = document.getElementById("artistList");

const type = "artist";
const token =
  "BQCohzx7N1Fw3yW2ojd7pBq1T8KB2ET9WT0SLtOGHYyHu21EAY5y2K4_KvpDx2nwbamS0XU0GuZTUHmJX_5D09DCrSu_qNxkartCxRWsVyAkefUmOwKckGT9W85SbcVRzaXm7tf_1i32PQ31fiVFJIoLe0LfimDVMzI";

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
