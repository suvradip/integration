FusionCharts.ready(function () {
    var yearlyData = {
        "lastyear": {
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
        },
            "thisyear": {
            "chart": {
                "caption": "Split of Revenue by Product Categories",
                    "subCaption": "This year",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12",
                    "subcaptionFontBold": "0"
            },
                "data": [{
                "label": "Food",
                    "value": "5000"
            }, {
                "label": "Apparels",
                    "value": "14633"
            }, {
                "label": "Electronics",
                    "value": "1000"
            }, {
                "label": "Household",
                    "value": "20000"
            }]
        }
    };
    var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '300',
        height: '300',
        dataFormat: 'json',
        dataSource: yearlyData.lastyear
    }).render();

    /**
             * @description
             * The setJSONData() method sets chart data in the JSON data format. When this function is called on a chart that has already rendered, it immediately updates the chart with the new data. The function can also be used to set data for a new chart.
.
             *@param {Object} data: JSON data to be set for the chart, as a string or as a JavaScript object
            
 
             * usage: chartObject.setJSONData(data); 
          
             */
    var year = document.getElementById("set_json_data");

    function change() {
        var data = yearlyData[year.value];
        revenueChart.setJSONData(data);
    }
    year.addEventListener("change", change);

});