FusionCharts.ready(function () {
    var chart = {
        type: 'doughnut2d',
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
                    "subCaptionFontSize": "12"
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
    };

    var revenueChart = new FusionCharts(chart);
    revenueChart.render();


    /**
     * @description
     * The print() method prints individual charts. It hides all elements on a page except the chart to print and then invokes the page printing function (window.print()).    
     *
     * @param {Object} options: this paramiter contains hideButtons as its attribute and its default value is true 
     * usage: chartObj.print();
     *         chartObj.print({false});

     */
    function print() {
        revenueChart.print();
    }
    /* function printP()
    {
        revenueChart.print({hideButtons : false });
    }*/

    document.getElementById("print").addEventListener("click", print);
    //document.getElementById("print_p").addEventListener("click", printP);


});