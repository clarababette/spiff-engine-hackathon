

//instance for factory function
var tracker = feedsTracker();
const storageList = [];
if(localStorage['feedsList']) {
	storageList = JSON.parse(localStorage.getItem('feedsList'));
}

function addMeal(){
	var eachFeed = document.createElement('Li');
	var eachMeal = checkedMeal.value

    eachFeed.innerHTML = tracker.setMeal(eachMeal);


    displayAddedMealElem.appendChild(eachFeed);
	successfullyElem.innerHTML = 'seccessfully added a meal'

    let key = feedsTracker.getMeal();
	localStorage.setItem('feedsList', JSON.stringify(key));


const addButtonElement = document.querySelector(".btn");
const submitButtonElement = document.querySelector(".subBtn")
const mealElement = document.querySelector(".meal")


mealElement.addEventListener('change',function(){
    mealElement.querySelector("meal").innerHTML = ""
})

addButtonElement.addEventListener('click',function(){
    addButtonElement.querySelector("btn").innerHTML = ""

})

    submitButtonElement.addEventListener('click',function(){

    })
    
function foodCheckBox(food) {
  let div = document.createElement('div');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = food;
  checkbox.value = food;
  let foodLabel = document.createElement('label');
  foodLabel.for = food;
  foodLabel.innerHTML = food;
  div.appendChild(checkbox);
  div.appendChild(foodLabel);
  return div;
}

function howMuchDropdown(food) {
  let div = document.createElement('div');
  let select = document.createElement('select');
  select.name = food;
  let label = document.createElement('label');
  label.for = food;
  label.innerHTML = food;
  let habits = ["didn't eat any", 'ate some', 'ate most', 'ate it all', 'ate it all and wanted more'];
  habits.forEach((habit) => {
    let option = document.createElement('option');
    option.value = habit;
    option.innerHTML = habit;
    select.appendChild(option);
  });

  div.appendChild(label);
  div.appendChild(select);
  return div;
}

