FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of visitors by age group-FY2013-14",
                    "subCaption": "Harry's SuperMart",
                    "enableSmartLabels": "0",
                    "showPercentValues": "1",
                    "showTooltip": "0",
                    "decimals": "1",
                    "theme": "fint"
            },
                "data": [{
                "label": "Teenage",
                    "value": "1250400"
            }, {
                "label": "Adult",
                    "value": "1463300"
            }, {
                "label": "Mid-age",
                    "value": "1050700"
            }, {
                "label": "Senior",
                    "value": "491000"
            }]
        },
            "events": {
            /**
             * @description
             * The dataplotRollOver event is triggered everytime the mouse pointer is rolled over a data plot (column, anchor of line or area, pie etc.)
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to the data plot being rolled over like chartX, chartY, dataValue, tooltext, etc.
             */

                "dataplotRollOver": function (eventObj, dataObj) {
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
    });

    ageGroupChart.render();

});