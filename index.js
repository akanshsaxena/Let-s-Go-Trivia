let exCat
let exDif
let exQue
let catObject= {}
let catArray = []
let catDiv
let count = 0
let ques = []

const selCategory = document.getElementById('myCategories')
const selDifficulty = document.getElementById('myDifficulty')
const selQuestion = document.getElementById('myQuestions')

async function createCategories(){
  const categories = await fetch('https://opentdb.com/api_category.php')
  catObject = await categories.json()
  catArray = await catObject.trivia_categories
  catArray.forEach((category)=>{
    const select = document.createElement('option')
    select.value = category.id
    select.textContent = category.name
    selCategory.appendChild(select)
  })
}

function getChoices(){
    exDif = selDifficulty.options[selDifficulty.selectedIndex].value
    exCat = selCategory.options[selCategory.selectedIndex].value
    exQue = selQuestion.options[selQuestion.selectedIndex].value
}

 async function getQuestions(amount, category, difficulty){
    const questions = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`)
    const queJson = await questions.json()
    ques = queJson.results
    console.log(ques)
}

createCategories();

export {exDif, exCat, exQue}
