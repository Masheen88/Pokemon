//pokemon api
const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

//return names of pokemone in array
function getPokemonNames() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results.map((pokemon) => pokemon.name));
}

getPokemonNames().then((names) => {
  console.log(names);

  //collapse pokemon list on button click
  let collapse = document.getElementById("collapsePokemonList");
  collapse.addEventListener("click", function () {
    let pokemonList = document.getElementById("pokemonList");
    if (pokemonList.style.display === "none") {
      pokemonList.style.display = "block";
    } else {
      pokemonList.style.display = "none";
    }
  });

  //iterate through images from folder and display on page
  imageUrl = `./main-sprites/yellow/`;

  for (let i = 1; i <= 151; i++) {
    //display ever 3rd pokemone start at one
    if (i % 3 === 1) {
      // display pokemon iamge and name
      let img = document.createElement("img");
      img.src = `${imageUrl}${i}.png`;
      img.alt = `${i}`;
      img.className = "pokemon";
      document.getElementById("pokemonImages").appendChild(img);

      //append text to pokemon image
      let name = document.createElement("div");
      name.innerHTML = `Pokemon ID: ${i} - ${names[i - 1]}`;
      name.className = "pokemon";
      document.getElementById("pokemonImages").appendChild(name);
      //get pokemone name from id
    }
  }

  //get pokemon name by id
  function getPokemonById(id) {
    let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => data.name);
    console.log("pokemon", pokemon);
    return pokemon;
  }
});
