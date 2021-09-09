import React, {useEffect} from 'react';
import {Card, CardContent, useTheme} from '@material-ui/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dataviz from '@amcharts/amcharts4/themes/animated';
import Skeleton from '@material-ui/lab/Skeleton';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

export const Chart = ({chartName, lineData, columnData, id, isLoading}) => {
  const theme = useTheme();

  useEffect(() => {
    const chart = am4core.create(id, am4charts.XYChart)
    // chart name
    const chartTitle = chart.titles.create()
    chartTitle.text = chartName;
    chartTitle.fontSize = 18;
    chartTitle.fill = am4core.color(theme.palette.text.secondary);
    chartTitle.align = 'left';
    // define legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';
    chart.legend.contentAlign = 'right';
    chart.legend.fontSize = 12;
    chart.legend.labels.template.fill = am4core.color(theme.palette.text.secondary);
    chart.legend.marginBottom = 10;
    chart.legend.markers.template.width = 18
    chart.legend.markers.template.height = 18
    chart.legend.markers.template.strokeWidth = 0
    // Define axis
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormats.setKey('month', 'MMM yyyy');
    dateAxis.fontSize = 10;
    dateAxis.renderer.labels.template.fill = am4core.color(theme.palette.text.secondary);
    dateAxis.renderer.minGridDistance = 35;
    dateAxis.renderer.grid.template.strokeWidth = 0;
    dateAxis.cursorTooltipEnabled = false;
    // Define axes values
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.fontSize = 14;
    valueAxis.renderer.labels.template.fill = am4core.color(theme.palette.text.secondary);
    valueAxis.renderer.grid.template.stroke = am4core.color(theme.palette.main);
    valueAxis.renderer.grid.template.strokeWidth = 2;
    valueAxis.renderer.grid.template.strokeOpacity = .8;
    valueAxis.renderer.baseGrid.stroke = am4core.color(theme.palette.main);
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.numberFormatter = new am4core.NumberFormatter();
    valueAxis.numberFormatter.numberFormat = '$#,###.#.a';
    valueAxis.cursorTooltipEnabled = false;
    // Adding column
    const columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.data = columnData;
    columnSeries.name = 'Revenue';
    columnSeries.dataFields.valueY = 'IncomeStatementMeasures.grossProfit';
    columnSeries.dataFields.dateX = 'IncomeStatementMeasures.accountingPeriodEndDate.month';
    columnSeries.yAxis = valueAxis;
    columnSeries.fill = am4core.color(theme.palette.grey);
    columnSeries.fillOpacity = .6;
    columnSeries.stroke = am4core.color(theme.palette.main);
    columnSeries.columns.template.column.cornerRadiusTopLeft = 5;
    columnSeries.columns.template.column.cornerRadiusTopRight = 5;
    columnSeries.columns.template.propertyFields.fill = theme.palette.lightGrey;
    columnSeries.tooltipText = "[#fff font-size: 14px]{name} \n[/] [#fff font-size: 12px]{dateX.formatDate('MMM yyyy')} \n[/]  [#fff font-size: 18px]{valueY.formatNumber('$#,###.#.a')}[/] [#fff]{additional}[/]";
    if (columnSeries.tooltip) {
      columnSeries.tooltip.getFillFromObject = false;
      columnSeries.tooltip.background.fill = am4core.color(theme.palette.grey);
    }
    // Adding line
    const lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.data = lineData;
    lineSeries.name = 'Gross Margin';
    lineSeries.dataFields.valueY = 'IncomeStatementMeasures.grossMargin';
    lineSeries.dataFields.dateX = 'IncomeStatementMeasures.accountingPeriodEndDate.month';
    lineSeries.yAxis = valueAxis;
    lineSeries.stroke = am4core.color(theme.palette.green);
    lineSeries.strokeWidth = 3;
    lineSeries.smoothing = 'monotoneX'
    lineSeries.propertyFields.strokeDasharray = 'lineDash';
    lineSeries.tooltipText = "[#fff font-size: 14px]{name} \n[/] [#fff font-size: 12px]{dateX.formatDate('MMM yyyy')} \n[/]  [#fff font-size: 18px]{valueY.formatNumber('$#,###.#.a')}[/] [#fff]{additional}[/]";
    if (lineSeries.tooltip) {
      lineSeries.tooltip.getFillFromObject = false;
      lineSeries.tooltip.background.fill = am4core.color(theme.palette.green);
    }
    // Define dots
    const bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color(theme.palette.green);
    const circle = bullet.createChild(am4core.Circle);
    circle.radius = 5;
    circle.fill = am4core.color(theme.palette.green);
    circle.strokeWidth = 2.5;
    // Adding Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineY.strokeWidth = 0;
    // Zoom button
    chart.zoomOutButton.background.fill = am4core.color(theme.palette.text.primary);
    const chartHover = chart.zoomOutButton.background.states.getKey('hover');
    if (chartHover) chartHover.properties.fill = am4core.color(theme.palette.green);
    const chartDown = chart.zoomOutButton.background.states.getKey('down');
    if (chartDown) chartDown.properties.fill = am4core.color(theme.palette.green);
    chart.logo.disabled = true;
    // Unmount component
    return () => {
      if (chart) chart.dispose();
    }
  }, [theme, lineData, columnData, id])

  return (
    <Card elevation={3}>
      <CardContent>
        {
          isLoading ? <Skeleton animation="wave" variant="rect" width={'100%'} height={300}/> :
            <div id={id} style={{height: '300px', width: '100%'}}/>
        }
      </CardContent>
    </Card>
  );
};