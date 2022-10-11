const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatch(word, cities) {
  return cities.filter((location) => {
    const regex = new RegExp(word, "gi");
    return location.city.match(regex) || location.state.match(regex);
  });
}
function searchInput() {
  const matches = findMatch(this.value, cities);
  const htmlOutput = matches
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
      </li>
      `;
    })
    .join("");
  outputField.innerHTML = htmlOutput;
}

const inputField = document.querySelector(".search");
const outputField = document.querySelector(".suggestions");

inputField.addEventListener("input", searchInput);
