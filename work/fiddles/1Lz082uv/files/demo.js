FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '350',
        height: '350',
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
     * The getDataAsCSV() method fetches chart data as comma-separated values. The delimiter can be changed by passing relevant chart attributes.
     * usage: chartObj.getDataAsCSV();
     *         
     */
    function getCSV() {
        var csv = revenueChart.getDataAsCSV();
        csv = csv.replace(/\n/g, "<br>");
        document.getElementById('msg').innerHTML = csv;
    }

    document.getElementById("get_data_as_csv").addEventListener("click", getCSV);
});