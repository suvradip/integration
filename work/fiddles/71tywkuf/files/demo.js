FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container1',
        width: '500',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Monthly revenue for last year",
                    "subCaption": "Harry's SuperMart",
                    "xAxisName": "Month",
                    "yAxisName": "Revenue (In USD)",
                    "numberPrefix": "$",
                    "paletteColors": "#0075c2",
                    "bgColor": "#ffffff",
                    "borderAlpha": "20",
                    "canvasBorderAlpha": "0",
                    "usePlotGradientColor": "0",
                    "plotBorderAlpha": "10",
                    "placevaluesInside": "1",
                    "rotatevalues": "1",
                    "valueFontColor": "#ffffff",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                    "subcaptionFontBold": "0",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12"
            },
                "data": [{
                "label": "Jan",
                    "value": "420000"
            }, {
                "label": "Feb",
                    "value": "810000"
            }, {
                "label": "Mar",
                    "value": "720000"
            }, {
                "label": "Apr",
                    "value": "550000"
            }, {
                "label": "May",
                    "value": "910000"
            }, {
                "label": "Jun",
                    "value": "510000"
            }, {
                "label": "Jul",
                    "value": "680000"
            }, {
                "label": "Aug",
                    "value": "620000"
            }, {
                "label": "Sep",
                    "value": "610000"
            }, {
                "label": "Oct",
                    "value": "490000"
            }, {
                "label": "Nov",
                    "value": "900000"
            }, {
                "label": "Dec",
                    "value": "730000"
            }]
        }
    }).render();

    /**
             * @description
             * The chartType() method is used to get and set the type of chart being created.
             *
             * @param {String} value: type of the chart need to be set
             * @param {Object} options: This parameter will be ignored if value is not specified. If the value is specified then it is considered, therre are 2 option in this object -dataSource and -dataFormat. dataSource: new source of data while changing chart type. dataFormat: data format for new data source if not specified default will be considered.  
             * usage: chartObject.chartType(); gets chart type
                       chartObject.chartType("bar2d"); sets type to bar2d.  
          
             */
    select = document.getElementById("type");
    select.value = revenueChart.chartType();

    function change() {

        var new_chart_type = select.value;
        var current_chart_type = revenueChart.chartType();

        document.getElementById("message").innerHTML = "Previous chart type: " + current_chart_type + " chart | Current chart type: " + new_chart_type + " chart";
        revenueChart.chartType(new_chart_type);


    }
    select.addEventListener("change", change);
});