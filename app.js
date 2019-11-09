
function searchMovies() {
    var name = document.getElementById('movieName');
    const fetchPromise = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=37ef1036&s=" + name.value);
    fetchPromise.then(response => {
        return response.json();
    }).then(Search => {
        main.innerHTML = cardHTML(Search);
    }).catch(error => {
        console.log("Error: ", error);
        main.innerHTML = errorAlertHTML();
    });
}

function cardHTML(Search) {
    let values = Search["Search"];
    let movieCards =  ('<div style="width:70vw;margin-right=auto;margin-left=auto;background-color:white;padding:20px">');

 

    values.forEach(movie => {
 
        movieCards += `<ul style="margin: 20px;color:black;border-radius:25px;list-style:none">
                        <li onclick="setSelectedMovie('${movie.Title}')" style="height:50px;cursor:pointer">
                        <div style="height:50px;width:50px;position:absolute;background-image:url('${movie.Poster}');background-size:contain;float:left"></div>
    <b style="margin-left:100px">${movie.Title} | ${movie.Year}</b></li><hr></ul>`;
    });

    movieCards += '</div>';
    return movieCards;
}

function errorAlertHTML() {
    var errorMessage = ('<div class="alert alert-error" role="alert">');
    errorMessage +=  ('No search results found!');
    errorMessage += ('</div>');
    return errorMessage;
}

function setSelectedMovie(Movie) {
    localStorage.setItem("movieName", Movie);
    var name = document.getElementById('movieName');
    localStorage.setItem("SearchTerm", name.value);
    window.location.href = "movie-details/movie-details.html";
}

function searchMoviesOnTypeAhead() {
    var name = document.getElementById('movieName');
    if (name.value.length > 1) {
        searchMovies();
    }
}
 function init() {
    var name = localStorage.getItem('SearchTerm');
    console.log("Name:", name);
    if (name !== null && name !== '') {
        document.getElementById("movieName").value = name;
        searchMovies();
    }
 }

 init();
