FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '200',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Revenue by Product Categories",
                    "animation": "0",
                    "subCaption": "Last year",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12",
                    "subcaptionFontBold": "0"
            },
                "data": [

            ]
        }
    });


    function render() {

        //revenueChart.configure("baseChartMessageColor","#f45b00");


        /**
             * @description
             * The configure() method configures status messages that are displayed while rendering a chart. 
.
             *
             * @param {FusionCharts~chartStatusMessages} option: To set/update multiple attributes at once, an object containing all the key-value pairs is passed. In case of a single value, a string that is the key (the attribute name) is passed.
             * @param {String} value: If the option parameter has a single value as the key, this parameter is the value of that key.
 
             * usage: chartObject.setChartAttribute(attribute, value);
          
             */

        revenueChart.configure({
            "dataEmptyMessage": "No data to load. Please check the data source."
        });
        revenueChart.render();

    }

    document.getElementById("render").addEventListener("click", render);
});