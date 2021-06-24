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
  return 'Fed by: ' + fedby;
});

Handlebars.registerHelper('howMuch', (much) => {
  switch (much) {
    case "didn't eat any":
      return new Handlebars.SafeString("'how-much ate-none'");
    case 'ate some':
      return new Handlebars.SafeString("'how-much ate-some'");
    case 'ate most':
      return new Handlebars.SafeString("'how-much ate-most'");
    case 'ate it all':
      return new Handlebars.SafeString("'how-much finished'");
    case 'ate it all and wanted more':
      return new Handlebars.SafeString("'how-much finished-and-more'");
    default:
      break;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var templateSource = document.querySelector('#feedTemplate').innerHTML;
  var feedTemplate = Handlebars.compile(templateSource);
  var feed = document.querySelector('#feedList');
  feed.innerHTML = feedTemplate(feedList);
});
