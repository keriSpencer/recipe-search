let recipesDiv = document.getElementById('recipes')
let searchUrl = 'https://crossorigin.me/http://www.recipepuppy.com/api'

let runSearch = function() {
  let searchValue = document.getElementById('search')
  searchValue = searchValue.value
  let queryUrl = searchUrl + '?q=' + searchValue

  fetch(queryUrl).then(response => response.json()).then(data => {
    console.log(data)

    for (var i = 0; i < data.results.length; i++) {
      /*let container = */

      let recipeDiv = document.createElement('div')
      recipeDiv.className = 'recipeClass'
      recipesDiv.appendChild(recipeDiv)

      let thumbnail = document.createElement('img')

      if (data.results[i].thumbnail === '') {
        thumbnail.src = 'http://placekitten.com/150/150'
      } else {
        thumbnail.src = `${data.results[i].thumbnail}`
        thumbnail.id = 'thumbnailImage'
      }
      recipeDiv.appendChild(thumbnail)

      let title = document.createElement('a')
      title.id = 'recipeName'
      title.href = data.results[i].href
      title.innerHTML = data.results[i].title
      recipeDiv.appendChild(title)
      // recipesDiv.appendChild(foodImage)

      let ingredients = document.createElement('p')
      ingredients.innerHTML = data.results[i].ingredients
      ingredients.id = 'recipeIngredients'
      recipeDiv.appendChild(ingredients)

      console.log(data.results[i])

      // let ingredients = data.results[i].ingredients
      // let thumbnail = data.results[i].thumbnail
      // console.log(data.results[i])
    }
  })
}

let button = document.getElementById('button')
button.addEventListener('click', runSearch)
