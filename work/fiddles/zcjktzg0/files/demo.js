FusionCharts.ready(function () {
    var transactionChart = new FusionCharts({
        id: "mychart",
        type: 'realtimecolumn',
        renderAt: 'chart-container',
        width: '500',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Online Transactions per 10 seconds",
                    "subCaption": "harryssupermart.com",
                    "showrealtimevalue": "1",
                    "yaxismaxvalue": "10",
                    "numdisplaysets": "10",

                    "labeldisplay": "rotate",
                    "slantLabels": "1",
                    "showLegend": "0",
                    "showValues": "0",
                    "numbersuffix": " Transactions",
                    "showlabels": "1",
                    "showRealTimeValue": "0",

                    "theme": "fint",
                    "captionFontSize": "13",
                    "subCaptionFontSize": "12"
            },
                "categories": [{
                "category": [{
                    "label": "Start"
                }]
            }],
                "dataset": [{
                "seriesname": "",
                    "alpha": "100",
                    "data": [{
                    "value": "3"
                }]
            }]
        },
            "events": {
            "initialized": function (evt, arg) {
                //Format minutes, seconds by adding 0 prefix accordingly


                function formatTime(time) {
                    if (time < 10) {
                        time = "0" + time;
                    }
                    return time;
                }
                //Update Data method
                function updateData() {

                    //Get reference to the chart using its ID
                    var chartRef = FusionCharts("mychart"),
                        //We need to create a querystring format incremental update, containing
                        //label in hh:mm:ss format
                        //and a value (random).
                        currDate = new Date(),
                        label = formatTime(currDate.getHours()) + ":" + formatTime(currDate.getMinutes()) + ":" + formatTime(currDate.getSeconds()),
                        //Get random number between 1 & 5 - rounded
                        transactions = Math.round(Math.random() * 4) + 1,
                        strData = "&label=" + label + "&value=" + transactions;
                    //Feed it to chart.


                    /**
                     * @description
                     * The feedData() method feeds real-time data to real-time charts and gauges. 
                     *  @param {String} stream: Real-time data for charts and gauges.
                     * Usage: chartObj.feedData(stream);
                     */


                    chartRef.feedData(strData);



                }

                document.getElementById("feed_data").addEventListener("click", updateData);
            }
        }
    });

    transactionChart.render();
});