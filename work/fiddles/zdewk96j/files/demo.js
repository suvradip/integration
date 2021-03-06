FusionCharts.ready(function () {
    var DrillDown_revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly revenue",
                    "subCaption": "Last year",
                    "xAxisName": "Quarter (Click to drill down)",
                    "yAxisName": "Revenue (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subCaptionFontSize": "12"
            },

                "data": [{
                "label": "Q1",
                    "value": "1950000",
                    "link": "newchart-json-q1"
            }, {
                "label": "Q2",
                    "value": "1970000",
                    "link": "newchart-json-q2"
            }, {
                "label": "Q3",
                    "value": "1910000",
                    "link": "newchart-json-q3"
            }, {
                "label": "Q4",
                    "value": "2120000",
                    "link": "newchart-json-q4"
            }],

                "linkeddata": [{
                "id": "q1",
                    "linkedchart": {
                    "chart": {
                        "caption": "Monthly Revenue",
                            "subcaption": "First Quarter",
                            "xAxisName": "Month",
                            "yAxisName": "Revenue (In USD)",
                            "numberPrefix": "$",
                            "theme": "fint",
                            "captionFontSize": "13",
                            "subCaptionFontSize": "12"
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
                    }]
                }
            }, {
                "id": "q2",
                    "linkedchart": {
                    "chart": {
                        "caption": "Monthly Revenue",
                            "subcaption": "Second Quarter",
                            "xAxisName": "Month",
                            "yAxisName": "Revenue (In USD)",
                            "numberPrefix": "$",
                            "theme": "fint",
                            "captionFontSize": "13",
                            "subCaptionFontSize": "12"
                    },
                        "data": [{
                        "label": "Apr",
                            "value": "550000"
                    }, {
                        "label": "May",
                            "value": "910000"
                    }, {
                        "label": "Jun",
                            "value": "510000"
                    }]
                }
            }, {
                "id": "q3",
                    "linkedchart": {
                    "chart": {
                        "caption": "Monthly Revenue",
                            "subcaption": "Third Quarter",
                            "xAxisName": "Month",
                            "yAxisName": "Revenue (In USD)",
                            "numberPrefix": "$",
                            "theme": "fint",
                            "captionFontSize": "13",
                            "subCaptionFontSize": "12"
                    },
                        "data": [{
                        "label": "Jul",
                            "value": "680000"
                    }, {
                        "label": "Aug",
                            "value": "620000"
                    }, {
                        "label": "Sep",
                            "value": "610000"
                    }]
                }
            }, {
                "id": "q4",
                    "linkedchart": {
                    "chart": {
                        "caption": "Monthly Revenue",
                            "subcaption": "Fourth Quarter",
                            "xAxisName": "Month",
                            "yAxisName": "Revenue (In USD)",
                            "numberPrefix": "$",
                            "theme": "fint",
                            "captionFontSize": "13",
                            "subCaptionFontSize": "12"
                    },
                        "data": [{
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
            }]
        }
    });

    DrillDown_revenueChart.render();
    // Configuring all the children charts to be a pie chart instead of column and setting the custom message

    /**
             * @description
             * The configureLink() method is lets you configure individual or multiple drill-down levels in linked charts.
             *
             * @param {Object or array} param: Configuration properties for the LinkedCharts. To configure multiple levels at once, pass the level numbers as an array to this parameter. To configure the overlay button, pass the overlayButton object to this parameter.
             * @param {number} level: To configure a specific level of the drill-down chart, this parameter specifies the level number. 
             * usage: chartObject.configureLink(param,level);
          
             */

    DrillDown_revenueChart.configureLink({
        type: "pie2d",
        overlayButton: {
            message: 'Back to parent chart', // Set the button to show diff messafe
            bgColor: '#999999',
            borderColor: '#cccccc'
        }
    });
});