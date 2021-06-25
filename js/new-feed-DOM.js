let feedList = {};
if (localStorage['feedListStorage']) {
  feedList = JSON.parse(localStorage.getItem('feedListStorage'));
} else {
  feedList = startData;
}

const mealOption = document.querySelector('#meal');
const foodOptions = document.querySelector('.containing');
const addFoodBtn = document.querySelector('.add-food-btn');
const submitBtn = document.querySelector('.submit-btn');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const fedBy = document.querySelector('.fed-by');

mealOption.onchange = () => {
  let meal = mealOption.value;
  let foods = meals[meal];
  foodOptions.innerHTML = '';
  foods.forEach((food) => {
    let check = foodCheckBox(food);
    foodOptions.appendChild(check);
  });
  addFoodBtn.style.display = 'inherit';
  submitBtn.style.display = 'none';
};

addFoodBtn.addEventListener('click', () => {
  let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  let selectedFoods = [];
  checkedBoxes.forEach((food) => {
    selectedFoods.push(food.value);
  });
  foodOptions.innerHTML = '';
  selectedFoods.forEach((selected) => {
    let dropdown = howMuchDropdown(selected);
    foodOptions.appendChild(dropdown);
  });
  addFoodBtn.style.display = 'none';
  submitBtn.style.display = 'inherit';
});

submitBtn.addEventListener('click', () => {
  let foodHabits = document.querySelectorAll('.containing select');
  let feedID = date.value + mealOption.value;

  feedList[feedID] = {};
  feedList[feedID]['time'] = time.value;
  feedList[feedID]['fedby'] = fedBy.value;
  feedList[feedID]['contained'] = {};
  foodHabits.forEach((food) => {
    let foodname = food.name.replace('habit', '');
    feedList[feedID]['contained'][foodname] = food.value;
  });
  console.log(feedList);
  localStorage.setItem('feedListStorage', JSON.stringify(feedList));
  window.location.href = 'index.html';
});

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
  select.name = food + 'habit';
  let label = document.createElement('label');
  label.for = food + 'habit';
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
