parseDogs()

function parseDogs() {
    fetch('https://api.thedogapi.com/v1/images/search?limit=15')
    .then((res) => res.json())
    .then((dogs) => {
        console.log(dogs)
    })
}