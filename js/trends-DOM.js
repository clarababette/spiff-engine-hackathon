am4core.ready(function () {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree);

  var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

  networkSeries.data = [
    {
      name: "Didn't eat any",
      children: [
        { name: 'milk', value: 10 },
        { name: 'eggs', value: 23 },
        { name: 'bread', value: 3 },
      ],
    },
    {
      name: 'Ate some',
      children: [
        { name: 'cheese', value: 15 },
        { name: 'carrots', value: 8 },
        { name: 'potatoes', value: 6 },
      ],
    },
    {
      name: 'Ate most',
      children: [
        { name: 'peas', value: 35 },
        { name: 'pumpkin', value: 18 },
        { name: 'rice', value: 12 },
        { name: 'porridge', value: 26 },
      ],
    },
    {
      name: 'Ate everything',
      children: [
        { name: 'lettuce', value: 15 },
        { name: 'tomatoes', value: 48 },
        { name: 'corn', value: 8 },
        { name: 'chicken', value: 4 },
        { name: 'onions', value: 6 },
      ],
    },
    {
      name: 'Ate everything and wanted more',
      children: [
        { name: 'chocolate', value: 7 },
        { name: 'cereal', value: 14 },
      ],
    },
  ];

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
  networkSeries.nodes.template.label.truncate = false;
  networkSeries.nodes.template.label.wrap = false;
  networkSeries.minRadius = am4core.percent(2);
  networkSeries.manyBodyStrength = -5;
  networkSeries.links.template.strokeOpacity = 0;
  networkSeries.colors.list = [am4core.color('#a6e1b1'), am4core.color('#566b92'), am4core.color('#fcb698'), am4core.color('#a6e0b1'), am4core.color('#7c7cd0'), am4core.color('#bf566b'), am4core.color('#daeea0'), am4core.color('#fcb597'), am4core.color('#556a91'), am4core.color('#78c777'), am4core.color('#fcb597')];
});
