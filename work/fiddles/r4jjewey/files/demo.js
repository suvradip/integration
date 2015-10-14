FusionCharts.ready(function () {
    var year_2013 = {
        "chart": {
            "caption": "Top 3 Electronic Brands in Top 3 Revenue Earning States",
                "subCaption": "2013",
                "aligncaptiontocanvas": "0",
                "yaxisname": "Statewise Sales (in %)",
                "xaxisname": "Brand",
                "numberprefix": "$",
                "showxaxispercentvalues": "1",
                "showsum": "1",
            //Custom tool-text string built using a combination of HTML and chart macro variables
            "plottooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}State: <b>$seriesName</b>{br}Sales : <b>$dataValue</b>{br}Market share in $seriesName : <b>$percentValue</b>{br}Overall market share of $label: <b>$xAxisPercentValue</b>",
                "theme": "fint",
                "captionFontSize": "13",
                "subcaptionFontSize": "12"
        },
            "categories": [{
            "category": [{
                "label": "Bose"
            }, {
                "label": "Dell"
            }, {
                "label": "Apple"
            }]
        }],
            "dataset": [{
            "seriesname": "California",
                "data": [{
                "value": "335000"
            }, {
                "value": "225100"
            }, {
                "value": "164200"
            }]
        }, {
            "seriesname": "Washington",
                "data": [{
                "value": "215000"
            }, {
                "value": "198000"
            }, {
                "value": "120000"
            }]
        }, {
            "seriesname": "Nevada",
                "data": [{
                "value": "298000"
            }, {
                "value": "109300"
            }, {
                "value": "153600"
            }]
        }]
    };

    var year_2014 = {
        "chart": {
            "caption": "Top 3 Electronic Brands in Top 3 Revenue Earning States",
                "subCaption": "2014",
                "aligncaptiontocanvas": "0",
                "yaxisname": "Statewise Sales (in %)",
                "xaxisname": "Brand",
                "numberprefix": "$",
                "showxaxispercentvalues": "1",
                "showsum": "1",
            //Custom tool-text string built using a combination of HTML and chart macro variables
            "plottooltext": "<div id='nameDiv' style='font-size: 14px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block;'>$label :</div>{br}State: <b>$seriesName</b>{br}Sales : <b>$dataValue</b>{br}Market share in $seriesName : <b>$percentValue</b>{br}Overall market share of $label: <b>$xAxisPercentValue</b>",
                "theme": "fint",
                "captionFontSize": "13",
                "subcaptionFontSize": "12"
        },
            "categories": [{
            "category": [{
                "label": "Bose"
            }, {
                "label": "Dell"
            }, {
                "label": "Apple"
            }]
        }],
            "dataset": [{
            "seriesname": "California",
                "data": [{
                "value": "335000"
            }, {
                "value": "225100"
            }, {
                "value": "124200"
            }]
        }, {
            "seriesname": "Washington",
                "data": [{
                "value": "153000"
            }, {
                "value": "198000"
            }, {
                "value": "222000"
            }]
        }, {
            "seriesname": "Nevada",
                "data": [{
                "value": "298000"
            }, {
                "value": "10300"
            }, {
                "value": "553600"
            }]
        }]
    };

    var salesByBrandChart = new FusionCharts({
        type: 'marimekko',
        renderAt: 'chart-container',
        width: '450',
        height: '350',
        dataFormat: 'json',
        dataSource: year_2014
    }).render();

    /**
     * @description
     * The setChartData() method sets the data for a chart.

When this function is called on a chart that is already rendered, the chart is instantly updated with the new data. When it is used to set data for a chart before it has rendered, data is initially stored internally and is passed to the chart when it is rendered.

     * @param {Object} data: Data to be passed to the chart.
     * @param {FusionCharts-Dataformat} format: Format of the data being passed. If the value for this parameter is not a valid dataFormat, then the default or previously set data format is assumed.
     * usage: chartObj.setChartData(data,format);
     *         
     */


    function setData() {
        var year_data = document.getElementById("year").value;
        console.log(year_data);
        if (year_data == "2013") {
            salesByBrandChart.setChartData(year_2013, "json");
        } else if (year_data == "2014") {
            salesByBrandChart.setChartData(year_2014, "json");
        }
    }

    document.getElementById("set_chart_data").addEventListener("click", setData);

});