FusionCharts.ready(function () {
    var inventoryChart = new FusionCharts({
        type: 'dragcolumn2d',
        renderAt: 'chart-container',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Inventory status - Bakersfield Central",
                    "subCaption": "Top 5 Food items",
                    "xAxisName": "Food Item",
                    "yAxisName": "No. of Units",
                    "theme": "fint"
            },
                "categories": [{
                "category": [{
                    "label": "Poultry"
                }, {
                    "label": "Rice"
                }, {
                    "label": "Peanut Butter"
                }, {
                    "label": "Salmon"
                }, {
                    "label": "Cereal"
                }]
            }],
                "dataset": [{
                "seriesname": "Available Stock",
                    "allowDrag": "0",
                    "data": [{
                    "value": "6000"
                }, {
                    "value": "9500"
                }, {
                    "value": "11900"
                }, {
                    "value": "8000"
                }, {
                    "value": "9700"
                }]
            }, {
                "seriesname": "Estimated Demand",
                    "dashed": "1",
                    "data": [{
                    "value": "19000"
                }, {
                    "value": "16500"
                }, {
                    "value": "14300"
                }, {
                    "value": "10000"
                }, {
                    "value": "9800"
                }]
            }]
        },
        events: {

            /**
             * @description
             * Triggered when you start dragging the data plots of the drag-able charts (the drag-node, drag-column, drag-line, and drag-area charts).
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to chart data, such as the format and source of the chart data.
             */

                'dataplotDragStart': function (eventObj, dataObj) {
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