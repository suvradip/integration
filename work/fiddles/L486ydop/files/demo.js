FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'doughnut3d',
        renderAt: 'chart-container',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Revenue by Product Categories",
                    "subCaption": "Last year",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12",
                    "subcaptionFontBold": "0"
            },
                "data": [{
                "label": "Food",
                    "value": "28504"
            }, {
                "label": "Apparels",
                    "value": "14633"
            }, {
                "label": "Electronics",
                    "value": "10507"
            }, {
                "label": "Household",
                    "value": "4910"
            }]
        }
    }).render();

    /**
     * @description
     * The getCSVData() method fetches chart data set in the CSV format.
The data returned is the closest possible comma-separated value representation that has been provided to the chart. The exported data does not contain any functional or cosmetic attribute that was set on the chart. However, the following chart attributes can be set to customise the CSV output:
     * @param {String} exportDataSeparator: Sets the CSV delimiter string. Default: , (comma)
     * @param {String} exportDataQualifier: Sets the CSV qualifier string. Default: {quot}
     * @param {Boolean} exportDataFormattedVal: Sets whether the output will be a formatted string or a pure number.
     * @param {Boolean} exportErrorColumns: Forces error output on the error bar, error line, and error scatter charts
     * usage: chartObj.getCSVData();
     *         
     */
    function getCSV() {
        //var separator = document.getElementById("separator").value;
        //var qualifier = document.getElementById("qualifier").value;
        console.log(revenueChart.getCSVData);
        var csv = revenueChart.getCSVData();
        csv = csv.replace(/\n/g, "<br>");
        document.getElementById('csv_data').innerHTML = csv;
    }

    document.getElementById("get_csv_data").addEventListener("click", getCSV);
});