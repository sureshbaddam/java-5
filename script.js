document.addEventListener('DOMContentLoaded', () => {
  // Check if the user is logged in and display the username
  const username = localStorage.getItem('username');
  if (username) {
    document.getElementById(
      'username-display'
    ).textContent = `Welcome, ${username}!`;
  }

  // Example movie data (replace with API fetch)
  const movieData = [
    {
      title: 'Movie 1',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Movie 1',
    },
    {
      title: 'Movie 2',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Movie 2',
    },
    {
      title: 'Movie 3',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Movie 3',
    },
    {
      title: 'Movie 4',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Movie 4',
    },
    {
      title: 'Movie 5',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Movie 5',
    },
    {
      title: 'Movie 6',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for Movie 6',
    },
  ];

  // Function to display movies
  function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = ''; // Clear existing content

    movies.forEach((movie) => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('col-md-4', 'movie-card'); // Bootstrap grid classes

      movieCard.innerHTML = `
                <img src="${movie.imageUrl}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            `;

      movieContainer.appendChild(movieCard);
    });
  }

  // Call displayMovies on movies.html
  if (document.location.pathname.includes('movies.html')) {
    displayMovies(movieData); // Use the movieData array
    // OR, if you have an API:
    // fetchMoviesFromApi();
  }

  // Function to fetch movies from API
  async function fetchMoviesFromApi() {
    const apiUrl = 'YOUR_API_ENDPOINT_HERE'; // Replace with your API endpoint

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      displayMovies(data); // Assuming the API returns an array of movie objects
    } catch (error) {
      console.error('Error fetching movies:', error);
      movieContainer.innerHTML = '<p>Error loading movies.</p>';
    }
  }
});
