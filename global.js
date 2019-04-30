parseDogs()

function parseDogs() {
    fetch('https://raw.githubusercontent.com/gabe1331/dog-api/master/db.json')
    .then((res) => res.json())
    .then((dogs) => {
        console.log(dogs)
        dogs.forEach(function(dog){
            let dogEl = `
            <div class="card">
                <div>
                    <h1>${dog.breed}</h1>
                    <img src=${dog.image}>
                    <h3>${dog.height + ' / ' + dog.weight}</h3>
                    <h3>${dog.lifespan}</h3>
                    <h3>${dog.bred_for}</h3>
                </div>
            </div>
        `
        document.querySelector("#dogsWrapper").innerHTML += dogEl
        })
    })
}