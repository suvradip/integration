FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'mscolumn2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "theme": "fint",
                    "caption": "Comparison of Quarterly Revenue",
                    "subCaption": "Last two years",
                    "xAxisname": "Quarter",
                    "yAxisName": "Amount ($)",
                    "numberPrefix": "$"
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
            }]
        },
            "events": {

            /**
             * @description
             * This event is triggered when a legend item is clicked.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to chart data such as the chart ID, details of the dataset to which the legend item belongs, and so on.
             */

                "legendItemClicked": function (eventObj, dataObj) {
                console.log(eventObj);
                var header = document.getElementById('header');
                header.style.display = 'block';

                var tempDiv = document.createElement('div');
                var attrsTable = document.getElementById('attrs-table');
                var titleDiv, valueDiv;
                for (var prop in dataObj) {
                    titleDiv = document.createElement('div');
                    titleDiv.className = 'title';
                    titleDiv.innerHTML = prop;

                    valueDiv = document.createElement('div');
                    valueDiv.className = 'value';
                    valueDiv.innerHTML = dataObj[prop];

                    tempDiv.appendChild(titleDiv);
                    tempDiv.appendChild(valueDiv);
                }
                attrsTable.innerHTML = '';
                attrsTable.appendChild(tempDiv);
            }
        }
    }).render();
});