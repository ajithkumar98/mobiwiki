
function tableHTML(details) {

    var movieDetailTable =  ('<table id="movie-table" style="font-size: 20px; ' +
                                                                'display: table; ' +
                                                                'border-collapse: separate; ' +
                                                                'padding: 20px;' +
                                                                'margin-bottom: 100px;' +
                                                                'width: 500px;background-color:white !important">' );

    movieDetailTable += ('<tbody>');


    movieDetailTable += (`<tr>
                            <th style="padding: 15px">Poster</th>
                            <td style="padding: 15px;"><img style="width: 120px; height: 140px" src="${details.Poster}"></td>
                            </tr>`);


    movieDetailTable += (`<tr>
                            <th style="padding: 15px">Title</th>
                            <td style="padding: 15px;">${details.Title}</td>
                            </tr>`);

    movieDetailTable += (`<tr style="background-color: #90caf9;">
                            <th style="padding: 15px;">Year</th>
                            <td style="padding: 15px; ">${details.Year}</td>
                            </tr>`);

    movieDetailTable += (`<tr>
                            <th style="padding: 15px">Rated</th>
                            <td style="padding: 15px;">${details.Rated}</td>
                            </tr>`);

    movieDetailTable += (`<tr style="background-color: #90caf9;">
                            <th style="padding: 15px;">Released</th>
                            <td style="padding: 15px; ">${details.Released}</td>
                            </tr>`);

    movieDetailTable += (`<tr>
                            <th style="padding: 15px">Runtime</th>
                            <td style="padding: 15px;">${details.Runtime}</td>
                            </tr>`);

    movieDetailTable += (`<tr style="background-color: #90caf9;">
                            <th style="padding: 15px">Genre</th>
                            <td style="padding: 15px;  color: #424242">${details.Genre}</td>
                            </tr>`);

    movieDetailTable += (`<tr>
                            <th style="padding: 15px">Directors</th>
                            <td style="padding: 15px;  color: #424242">${details.Director}</td>
                            </tr>`);

    movieDetailTable += (`<tr style="background-color: #90caf9;">
                            <th style="padding: 15px">Language</th>
                            <td style="padding: 15px;  color: #424242">${details.Language}</td>
                            </tr>`);

    movieDetailTable += (`<tr>
                            <th style="padding: 15px">Country</th>
                            <td style="padding: 15px;  color: #424242; font-weight: 100">+${details.Country}</td>
                            </tr>`);

    movieDetailTable += (`<tr style="background-color: #90caf9;">
                            <th style="padding: 15px">BoxOffice</th>
                            <td style="padding: 15px;  color: #424242; font-weight: 100">+${details.BoxOffice}</td>
                            </tr>`);

    movieDetailTable += (`<tr>
                            <th style="padding: 15px">Production</th>
                            <td style="padding: 15px;  color: #424242; font-weight: 100">+${details.Production}</td>
                            </tr>`);

    movieDetailTable += (`<tr style="background-color: #90caf9;">
                            <th style="padding: 15px">Awards</th>
                            <td style="padding: 15px;  color: #424242; font-weight: 100">+${details.Awards}</td>
                            </tr>`);


    movieDetailTable += (`<tr>
                            <th style="padding: 15px">IMDB Votes</th>
                            <td style="padding: 15px;  color: #424242; font-weight: 100">+${details.imdbVotes}</td>
                            </tr>`);

    movieDetailTable += (`<tr style="background-color: #90caf9;">
                            <th style="padding: 15px">IMDB Rating</th>
                            <td style="padding: 15px;  color: #424242; font-weight: 100">+${details.imdbRating}</td>
                            </tr>`);

    movieDetailTable += ('</tbody>');
    movieDetailTable += ('</table>');
    return movieDetailTable;
}


function getmovieName() {
    var movie = localStorage.getItem('movieName');
    getmovieDetails(movie);
    movieName.innerHTML = `<div id="movieHeader" style="color: white; font-size: 30px; margin-top: 25px; margin-left: 55px;">${movie}</div>`;
}

function getmovieDetails(movie) {
    var getmovieUrl = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=37ef1036&t=' +  movie);
    console.log("Details API: ", getmovieUrl);
    getmovieUrl.then(response => {
        return response.json();
    }).then(details => {
        
        console.log("Details: ", details);
        movieDetails.innerHTML = tableHTML(details);
    });
}

// Calling the function, to invoke the movie Name in the Div Tag
getmovieName();
