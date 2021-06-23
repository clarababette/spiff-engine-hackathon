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
        { name: 'milk', value: 100 },
        { name: 'eggs', value: 60 },
        { name: 'bread', value: 30 },
      ],
    },
    {
      name: 'Ate some',
      children: [
        { name: 'B1', value: 135 },
        { name: 'B2', value: 98 },
        { name: 'B3', value: 56 },
      ],
    },
    {
      name: 'Ate most',
      children: [
        { name: 'C1', value: 335 },
        { name: 'C2', value: 148 },
        { name: 'C3', value: 126 },
        { name: 'C4', value: 26 },
      ],
    },
    {
      name: 'Ate everything',
      children: [
        { name: 'D1', value: 415 },
        { name: 'D2', value: 148 },
        { name: 'D3', value: 89 },
        { name: 'D4', value: 64 },
        { name: 'D5', value: 16 },
      ],
    },
    {
      name: 'Ate everything and wanted more',
      children: [
        { name: 'E1', value: 687 },
        { name: 'E2', value: 148 },
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
  networkSeries.fontSize = 8;
  networkSeries.nodes.template.label.hideOversized = true;
  networkSeries.nodes.template.label.truncate = true;
  networkSeries.minRadius = am4core.percent(2);
  networkSeries.manyBodyStrength = -5;
  networkSeries.links.template.strokeOpacity = 0;
});
