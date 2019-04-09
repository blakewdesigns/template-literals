fetch('https://api.thedogapi.com/v1/images/search?limit=15')
  .then(response => {
    let data = response.json()
    return parseDogos(data)
  })

function parseDogos(dogos) {
    console.log(dogos)
    // you code here
}