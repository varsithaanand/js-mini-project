const API_KEY = "b3826950"; // replace with your OMDb key
const searchBtn = document.getElementById("search-btn");
const movieInput = document.getElementById("movie-input");
const movieDetails = document.getElementById("movie-details");

searchBtn.addEventListener("click", async () => {
  const movieName = movieInput.value.trim();
  if (!movieName) {
    movieDetails.innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  try {
    const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`);
    const data = await response.json();

    if (data.Response === "False") {
      movieDetails.innerHTML = `<p>Movie not found. Try again!</p>`;
    } else {
      movieDetails.innerHTML = `
        <img src="${data.Poster}" alt="${data.Title}">
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
      `;
    }
  } catch (error) {
    movieDetails.innerHTML = `<p>⚠️ Error fetching data. Please try again later.</p>`;
    console.error(error);
  }
});
