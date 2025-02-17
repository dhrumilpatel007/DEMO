const movies = [
    {
        title: 'Sky Force',
        description: 'India and Pakistan engage in airstrike warfare.',
        image: 'MV5BNDBkYWNkNmEtNTdjNS00YzZjLWIzZjMtMmEwZTNhYjJiYWM4XkEyXkFqcGc@._V1_.jpg',
        downloadUrl: 'https://vidtube.one/d/u936cpl37x2y_h',
        poster: 'poster1.jpg'
    },
    {
        title: 'Movie 2',
        description: 'Description for Movie 2.',
        image: 'movie2.jpg',
        downloadUrl: 'https://example.com/download/movie2',
        poster: 'poster2.jpg'
    },
    // Add more movies here
];

const movieGrid = document.getElementById('movies');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Render movies
movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="movie-overlay"></div>
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <a href="${movie.downloadUrl}" class="download-button" target="_blank">
                <i class="fas fa-download"></i> Download
            </a>
        </div>
    `;

    movieGrid.appendChild(movieCard);
    setTimeout(() => {
        movieCard.classList.add('show');
    }, 100);
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.length > 0) {
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(query)
        );

        if (filteredMovies.length > 0) {
            filteredMovies.forEach(movie => {
                const resultItem = document.createElement('div');
                resultItem.textContent = movie.title;
                resultItem.addEventListener('click', () => {
                    window.location.href = movie.downloadUrl;
                });
                searchResults.appendChild(resultItem);
            });
            searchResults.classList.add('show');
        } else {
            searchResults.classList.remove('show');
        }
    } else {
        searchResults.classList.remove('show');
    }
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar')) {
        searchResults.classList.remove('show');
    }
});