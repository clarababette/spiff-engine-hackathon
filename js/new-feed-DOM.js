const buttonElement = document.querySelector('.btn');

// buttonElement.addEventListener('click',function()

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
