FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'mscolumn2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Comparison of Quarterly Revenue",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "plotFillAlpha": "80",
                    "theme": "fint"
            },
                "categories": [{
                "category": [{
                    "label": "Q1"
                }, {
                    "label": "Q2"
                }, {
                    "label": "Q3"
                }, {
                    "label": "Q4"
                }]
            }],
                "dataset": [{
                "seriesname": "Previous Year",
                    "data": [{
                    "value": "10000"
                }, {
                    "value": "11500"
                }, {
                    "value": "12500"
                }, {
                    "value": "15000"
                }]
            }, {
                "seriesname": "Current Year",
                    "data": [{
                    "value": "25400"
                }, {
                    "value": "29800"
                }, {
                    "value": "21800"
                }, {
                    "value": "26800"
                }]
            }],
                "trendlines": [{
                "line": [{
                    "startvalue": "12250",
                        "color": "#0075c2",
                        "displayvalue": "Previous{br}Average",
                        "valueOnRight": "1",
                        "thickness": "1",
                        "showBelow": "1",
                        "tooltext": "Previous year quarterly target  : $13.5K"
                }, {
                    "startvalue": "25950",
                        "color": "#1aaf5d",
                        "displayvalue": "Current{br}Average",
                        "valueOnRight": "1",
                        "thickness": "1",
                        "showBelow": "1",
                        "tooltext": "Current year quarterly target  : $23K"
                }]
            }]
        }
    });

    revenueChart.render();
    /**
     * @description
     * The showChartMessage() methos shows a text message on a chart.   
     *
     * @param {String} text: Text message to be displayed.
     * @param {Boolean} modal: Boolean value to indicate whether the message will be shown on an overlay                 button or on the chart. Default: false
     * @param {Boolean} cancelable: If set to true, the modal can be closed by clicking. Defaults to false.
     * usage: chartObj.showChartMessage("message");
     *         chartObj.showChartMessage("message",true,true);

     */
    function show() {

        var mode = document.getElementById("mode");
        var msg = document.getElementById("chart_message").value.trim();
        if (msg !== '' && mode.selectedIndex !== 0) {
            revenueChart.render();
            if (mode.value == "onchart") {
                revenueChart.showChartMessage(msg);
            } else if (mode.value == "overlay") {
                revenueChart.showChartMessage(msg, true);
            } else if (mode.value == "overlaycan") {
                revenueChart.showChartMessage(msg, true, true);
            }
        }
    }
    document.getElementById("show_message").addEventListener("click", show);

});