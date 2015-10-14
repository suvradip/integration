FusionCharts.ready(function () {

    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Monthly revenue",
                    "subCaption": "Last Year",
                    "xAxisName": "Month",
                    "yAxisName": "Revenues",
                //Making the chart export enabled in various formats
                "exportEnabled": "1",
                    "exportFileName": "DemoExport",
                    "exportAction": "save",
                    "numberPrefix": "$",
                    "theme": "fint"
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
            }, {
                "label": "Apr",
                    "value": "550000"
            }, {
                "label": "May",
                    "value": "910000"
            }, {
                "label": "Jun",
                    "value": "510000"
            }, {
                "label": "Jul",
                    "value": "680000"
            }, {
                "label": "Aug",
                    "value": "620000"
            }, {
                "label": "Sep",
                    "value": "610000"
            }, {
                "label": "Oct",
                    "value": "490000"
            }, {
                "label": "Nov",
                    "value": "900000"
            }, {
                "label": "Dec",
                    "value": "730000"
            }]
        },
        events: {
            "beforeExport": function (evtObj, argObj) {
                var table = document.getElementById('attrs-table');
                table.innerHTML = '<b>Exporting and saving chart in server. Please wait.</b>';
            },
            /**
             * @description
             * The exported event is triggered when a chart exports successfully.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to exported chart like export filename, status Message, DOM Id of the chart, height and width of the chart, etc.
             */
                "exported": function (eventObj, dataObj) {
                console.log(eventObj);
                var header = document.getElementById('header');
                header.style.display = 'block';

                var tempDiv = document.createElement('div');
                var attrsTable = document.getElementById('attrs-table');
                var titleDiv, valueDiv;
                // Iterating through all the properties in argObj and adding it to the DOM
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
    });

    revenueChart.render();
});