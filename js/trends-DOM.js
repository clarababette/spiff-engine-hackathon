let feedList = {};
if (localStorage['feedListStorage']) {
  feedList = JSON.parse(localStorage.getItem('feedListStorage'));
} else {
  feedList = startData;
}

let habitList = {
  "didn't eat any": {},
  'ate some': {},
  'ate most': {},
  'ate it all': {},
  'ate it all and wanted more': {},
};

for (const feed in feedList) {
  if (Object.hasOwnProperty.call(feedList, feed)) {
    const details = feedList[feed];
    for (const food in details['contained']) {
      if (Object.hasOwnProperty.call(details['contained'], food)) {
        const habit = details['contained'][food];
        if (habitList[habit][food]) {
          habitList[habit][food]++;
        } else {
          habitList[habit][food] = 1;
        }
      }
    }
  }
}

let habitData = [];

for (const habit in habitList) {
  if (Object.hasOwnProperty.call(habitList, habit)) {
    const foodList = habitList[habit];
    let chartNode = {};
    chartNode.name = habit;
    chartNode.value = 0;
    // let count = Object.values(foodList);
    // console.log(count);
    // let getHabitTotal = (accumulator, curr) => accumulator + curr;
    // let habitTotal = count.reduce(getHabitTotal);
    // console.log(habitTotal);
    chartNode.children = [];
    for (const food in foodList) {
      if (Object.hasOwnProperty.call(foodList, food)) {
        const count = foodList[food];
        let childNode = {};
        childNode.name = food;
        childNode.value = count;
        chartNode.children.push(childNode);
      }
    }
    habitData.push(chartNode);
  }
}

let habitTrends = am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree);

  var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

  networkSeries.data = habitData;

  networkSeries.dataFields.linkWith = 'linkWith';
  networkSeries.dataFields.name = 'name';
  networkSeries.dataFields.id = 'name';
  networkSeries.dataFields.value = 'value';
  networkSeries.dataFields.children = 'children';
  networkSeries.links.template.distance = 1;
  networkSeries.nodes.template.tooltipText = '{name}';
  networkSeries.nodes.template.fillOpacity = 1;
  networkSeries.nodes.template.outerCircle.scale = 1;

  networkSeries.nodes.template.label.text = '{name}';
  networkSeries.fontSize = 12;
  networkSeries.nodes.template.label.hideOversized = true;
  networkSeries.nodes.template.label.truncate = true;
  networkSeries.nodes.template.label.wrap = false;
  networkSeries.minRadius = am4core.percent(0);
  networkSeries.manyBodyStrength = -5;
  networkSeries.links.template.strokeOpacity = 0;
  networkSeries.colors.list = [am4core.color('#F266B3'), am4core.color('#5483BF'), am4core.color('#3FA64E')];
  chart.legend = new am4charts.Legend();
});
