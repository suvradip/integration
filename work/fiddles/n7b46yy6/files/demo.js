FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'line',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Total footfall in Bakersfield Central",
                    "subCaption": "Last week",
                    "xAxisName": "Day",
                    "yAxisName": "No. of Visitors",

                //Cosmetics
                "lineThickness": "2",
                    "paletteColors": "#0075c2",
                    "baseFontColor": "#333333",
                    "baseFont": "Helvetica Neue,Arial",
                    "captionFontSize": "14",
                    "subcaptionFontSize": "14",
                    "subcaptionFontBold": "0",
                    "showBorder": "0",
                    "bgColor": "#ffffff",
                    "showShadow": "0",
                    "canvasBgColor": "#ffffff",
                    "canvasBorderAlpha": "0",
                    "divlineAlpha": "100",
                    "divlineColor": "#999999",
                    "divlineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineGapLen": "1",
                    "showXAxisLine": "1",
                    "xAxisLineThickness": "1",
                    "xAxisLineColor": "#999999",
                    "showAlternateHGridColor": "0"
            },
                "data": [{
                "label": "Mon",
                    "value": "15123"
            }, {
                "label": "Tue",
                    "value": "14233"
            }, {
                "label": "Wed",
                    "value": "23507"
            }, {
                "label": "Thu",
                    "value": "9110"
            }, {
                "label": "Fri",
                    "value": "15529"
            }, {
                "label": "Sat",
                    "value": "20803"
            }, {
                "label": "Sun",
                    "value": "19202"
            }],
                "trendlines": [{
                "line": [{
                    "startvalue": "18500",
                        "color": "#1aaf5d",
                        "displayvalue": "Average{br}weekly{br}footfall",
                        "valueOnRight": "1",
                        "thickness": "2"
                }]
            }]
        }
    });

    visitChart.render();
    var msg = document.getElementById("msg");

    /**
     * @description
     * The getChartData() method fetches the data set for a chart, in one of the valid data formats. The function needs to be called on an existing chart. If called on a chart that has no data, it returns an empty chart object for json data, an empty <chart /> node for xml data, and an empty string for csv.
     *
     * @param {FusionCharts-Dataformat} format : Format in which chart data has to be retrieved
     * usage : chartObj.getChartData(format);
     *         
     */
    function getData() {
        var format = document.getElementById("data_format").value;
        var data = visitChart.getChartData(format);
        if (format == "csv") {
            data = data.replace(/\n/g, "<br>");
            msg.innerHTML = data;
        } else if (format == "json") {
            msg.innerHTML = JSON.stringify(data, undefined, 2);
        }
    }

    document.getElementById("get_chart_data").addEventListener("click", getData);

});