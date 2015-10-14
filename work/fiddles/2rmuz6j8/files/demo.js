FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '450',
        height: '200',
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
             * The clone() method is used to copy the existing FusionCharts object and create a new type of chart with same data or the different.
             *
             * @param {Object} override : new object will have the same attributes of cloned one except overridden attributes
             * @param {Boolean} argsOnly : if true  returns a serializable object that can later be passed to create a new FusionCharts instance. If false just creates a clone of object which is a FusionCharts object which can be directly rendered. 
             * usage : clone({attribute : new value },true) : the cloned object will contain the value of specified attribute as new value.
          
             */

    function exact_copy() {
        var cloned_chart = revenueChart.clone();
        console.log(cloned_chart);
        cloned_chart.render('cloned-chart-container');
    }


    function modified_copy() {
        var cloned_chart_2 = revenueChart.clone({
            type: 'bar2d',
            renderAt: 'cloned-chart-container'
        }, true);

        console.log(cloned_chart_2);

        var copy = new FusionCharts(cloned_chart_2);
        copy.render();
    }

    document.getElementById("exact_copy").addEventListener("click", exact_copy);
    document.getElementById("modified_copy").addEventListener("click", modified_copy);


});