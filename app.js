let title = `https://omdbapi.com/?s=thor&page=1&apikey=303e36a3`
let details = `http://www.omdbapi.com/?i=tt3896198&apikey=303e36a3`
// let popular = `http://www.omdbapi.com/?t=popular&apikey=303e36a3`
let form = document.getElementById('form');
let submitBtn = document.getElementById('go')

// addEventListener On form
submitBtn.addEventListener('click',()=>{
    let userValue = form.value.trim()
    getMovie(userValue)
})

function getMovie(userSearch){
    fetch(`https://omdbapi.com/?s=${userSearch}&page=1&apikey=303e36a3`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let test = ''
        data.Search.forEach(movie => {
            const { Title, Year, imdbID, Poster} = movie
            console.log(movie);
            test += `
            <div class="card" data-id="${imdbID}">
            <img
              src="${Poster}"
              alt=""
            />
            <div class="details">
              <div class="inner-flex">
                  <h4 class="porter-title">${Title}</h4>
                  <div class="ratio">9.7</div>
              </div>
              <div class="year">
                  <h4>${Year}</h4>
              </div>
            </div>
          </div>
            `
        });
        document.querySelector('.grid').innerHTML = test
    })
}

getMovie('fast')