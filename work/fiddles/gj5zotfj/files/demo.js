FusionCharts.ready(function () {
    var interval;
    var stockPriceChart = new FusionCharts({
        id: "stockRealTimeChart",
        type: 'realtimeline',
        renderAt: 'chart-container',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Real-time stock price monitor",
                    "subCaption": "Harry's SuperMart",
                    "xAxisName": "Time",
                    "yAxisName": "Stock Price",
                    "numberPrefix": "$",
                    "refreshinterval": "5",
                    "yaxisminvalue": "35",
                    "yaxismaxvalue": "36",
                    "numdisplaysets": "10",
                    "labeldisplay": "rotate",
                    "showValues": "0",
                    "showRealTimeValue": "0",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subCaptionFontSize": "12"
            },
                "categories": [{
                "category": [{
                    "label": "Day Start"
                }]
            }],
                "dataset": [{
                "data": [{
                    "value": "35.27"
                }]
            }]
        },
            "events": {
            "initialized": function (e) {
                function addLeadingZero(num) {
                    return (num <= 9) ? ("0" + num) : num;
                }

                function updateData() {
                    // Get reference to the chart using its ID
                    var chartRef = FusionCharts("stockRealTimeChart"),
                        // We need to create a querystring format incremental update, containing
                        // label in hh:mm:ss format
                        // and a value (random).
                        currDate = new Date(),
                        label = addLeadingZero(currDate.getHours()) + ":" + addLeadingZero(currDate.getMinutes()) + ":" + addLeadingZero(currDate.getSeconds()),
                        // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
                        randomValue = Math.floor(Math.random() * 50) / 100 + 35.25,
                        // Build Data String in format &label=...&value=...
                        strData = "&label=" + label + "&value=" + randomValue;
                    // Feed it to chart.
                    chartRef.feedData(strData);
                }

                interval = setInterval(function () {
                    updateData();
                }, 2000);
            }
        }
    })
        .render();

    /**
     * @description
     * The isUpdateActive() method Returns true if real-time update is enabled for a chart. Returns false is real-time update is stopped using the stopUpdate() method.
     *
     * usage: chartObj.isUpdateActive();     *         
     */
    function check() {
        document.getElementById("msg").innerHTML = stockPriceChart.isUpdateActive();

    }

    function stop_update() {
        // This method is useful only when we poll the server for real time updates. Since this example uses client side data updating, we use clear interval method.
        stockPriceChart.stopUpdate();
        clearInterval(interval);
    }
    document.getElementById("update_status").addEventListener("click", check);

    document.getElementById("stop_updt").addEventListener("click", stop_update);

});