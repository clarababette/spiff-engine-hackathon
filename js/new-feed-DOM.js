const buttonElement = document.querySelector(".btn");
const successfullyElem = document.querySelector(".successfully");
const displayAddedMealElem = document.querySelector(".displayAddedMeal");

// buttonElement.addEventListener('click',function()

//instance for factory
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

}

