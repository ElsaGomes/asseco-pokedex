const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?limit=150";

const grid = document.querySelector(".grid-container");

// const createGrid = function (data) {
//   const html = `
//   <div class="grid-container">
//   <div class="grid-item">${data.name}</div>
// </div>
//   `;
//   grid.insertAdjacentElement("beforeend", html);
// };
const results = [];
const names = [];
const urls = [];
const getPokemonList = async function () {
  try {
    const data = await fetch(pokemonListUrl);

    if (!data) throw new Error("Não foi possível encontrar a lista de Pokemon");

    const data2 = await data.json();

    const pokemonList = data2.results;

    // console.log(pokemonList);
    // names.push(pokemonList.name);
    // urls.push(pokemonList.url);
    // results.push(pokemonList);

    // console.log(pokemonList);
    // console.log(names);
    // console.log(urls);
    //   console.log(urlSinglePokemon);
  } catch (err) {
    console.error(err);
  }
};

// const getPokemonName = function (pokemonList) {
//   try {
//     const name = results.map(function (url, i) {
//       console.log(pokemonList[i].name);
//       return pokemonList[i].name;
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// //names.push(results.name);

getPokemonList();
console.log(results);
