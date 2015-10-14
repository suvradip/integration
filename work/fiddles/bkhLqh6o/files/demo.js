FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'msarea',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales of Liquor",
                    "subCaption": "Previous week vs current week",
                    "xAxisName": "Day",
                    "yAxisName": "Sales (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subCaptionFontSize": "12"
            },

                "categories": [{
                "category": [{
                    "label": "Mon"
                }, {
                    "label": "Tue"
                }, {
                    "label": "Wed"
                }, {
                    "label": "Thu"
                }, {
                    "label": "Fri"
                }, {
                    "label": "Sat"
                }, {
                    "label": "Sun"
                }]
            }],

                "dataset": [{
                "seriesname": "Previous Week",
                    "data": [{
                    "value": "13000"
                }, {
                    "value": "14500"
                }, {
                    "value": "13500"
                }, {
                    "value": "15000"
                }, {
                    "value": "15500"
                }, {
                    "value": "17650"
                }, {
                    "value": "19500"
                }]
            }, {
                "seriesname": "Current Week",
                    "data": [{
                    "value": "8400"
                }, {
                    "value": "9800"
                }, {
                    "value": "11800"
                }, {
                    "value": "14400"
                }, {
                    "value": "18800"
                }, {
                    "value": "24800"
                }, {
                    "value": "30800"
                }]
            }]
        }
    })
        .render();

    /**
             * @description
             * The getJSONData() method fetches chart data in the JSON format. This function needs to be called on an existing chart; if called on a chart that has no data set for it, it returns an empty chart object.
 
             * usage: chartObject.getJSONData();
          
             */

    function getJson() {
        var json = salesChart.getJSONData();
        var ele = document.getElementById("json_data");
        ele.innerHTML = JSON.stringify(json, undefined, 1);
    }
    document.getElementById("get_json_data").addEventListener("click", getJson);

});