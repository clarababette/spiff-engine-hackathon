let feedList = {};
if (localStorage['feedListStorage']) {
  feedList = JSON.parse(localStorage.getItem('feedListStorage'));
} else {
  feedList = startData;
}

let feedIDs = Object.keys(feedList);

feedIDs.sort();
feedIDs.reverse();

Handlebars.registerHelper('date', (mealID) => {
  return mealID.replace(/[A-z]/g, '');
});

Handlebars.registerHelper('meal', (mealID) => {
  return mealID.replace(/[^A-z]/g, '');
});

Handlebars.registerHelper('time', (mealID) => {
  return feedList[mealID]['time'];
});
Handlebars.registerHelper('contents', (mealID) => {
  let str = '{{#each ' + +'}}<div><h3 class="type">{{@key}}</h3><div class={{howMuch this}}></div></div>{{/each}}';

  return feedList[mealID]['time'];
});

Handlebars.registerHelper('feeder', (mealID) => {
  return 'Fed by: ' + feedList[mealID]['fedby'];
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
  let templateSource = document.querySelector('#feedTemplate').innerHTML;
  let feedTemplate = Handlebars.compile(templateSource);
  let feed = document.querySelector('#feedList');
  feed.innerHTML = feedTemplate(feedIDs);

  templateSource = document.querySelector('#contentsTemplate').innerHTML;
  let contentsTemplate = Handlebars.compile(templateSource);
  let allFeeds = document.querySelectorAll('.feed');
  allFeeds.forEach((feed) => {
    let mealID = feed.id;
    let div = feed.querySelector('.food');
    div.innerHTML = contentsTemplate(feedList[mealID]['contained']);
  });
});
