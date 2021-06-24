let feedList = {};
if (localStorage['feedListStorage']) {
  feedList = JSON.parse(localStorage.getItem('feedListStorage'));
}

Handlebars.registerHelper('date', (mealID) => {
  return mealID.replace(/[A-z]/g, '');
});

Handlebars.registerHelper('meal', (mealID) => {
  return mealID.replace(/[^A-z]/g, '');
});

Handlebars.registerHelper('feeder', (fedby) => {
  return 'fed by: ' + fedby;
});

Handlebars.registerHelper('howMuch', (much) => {
  return much.replace(' ', '-').replace("'", '');
});

document.addEventListener('DOMContentLoaded', function () {
  var templateSource = document.querySelector('#feedTemplate').innerHTML;
  var feedTemplate = Handlebars.compile(templateSource);
  var feed = document.querySelector('#feed');
  feed.innerHTML = feedTemplate(feedList);
});
