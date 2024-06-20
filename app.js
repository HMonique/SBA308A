async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    makeBreedList(data.message)
}

start()

function makeBreedList(dogList){
    document.getElementById("breed").innerHTML = `
    <select onchange="sortByBreed(this.value)">
       <option>Choose a breed</option> 
       ${Object.keys(dogList).map(function (breed) {
          return `<option>${breed}</option>`
       }).join('')}
    </select>
    `
}

async function sortByBreed(breed) {
  if (breed != "Choose a breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    console.log(data)
  }
}