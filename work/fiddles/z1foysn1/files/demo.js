FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of revenue by product categories",
                    "subCaption": "Last year",
                    "numberPrefix": "$",
                    "showPercentInTooltip": "0",
                    "decimals": "1",
                //Theme
                "theme": "fint"
            },
                "data": [{
                "label": "Food",
                    "value": "285040"
            }, {
                "label": "Apparels",
                    "value": "146330"
            }, {
                "label": "Electronics",
                    "value": "105070"
            }, {
                "label": "Household",
                    "value": "49100"
            }]
        },
            "events": {

            /**
             * @description
             * This event is triggered when a pie or a doughnut slice begins slicing out/slicing in.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to chart data, such as the data index of the slice being sliced out.
             */

                "slicingStart": function (eventObj, dataObj) {
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