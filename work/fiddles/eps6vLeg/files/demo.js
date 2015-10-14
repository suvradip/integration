FusionCharts.ready(function () {
    var salesPrediction = new FusionCharts({
        type: 'dragarea',
        renderAt: 'chart-container',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Unit Sales - Apple vs Samsung",
                    "subCaption": "Drag anchors to change estimated values",
                    "subCaptionFontSize": "12",
                    "xAxisName": "Quarter",
                    "yAxisName": "No. of Units",
                    "theme": "fint"
            },
                "categories": [{
                "category": [{
                    "label": "Q1"
                }, {
                    "label": "Q2"
                }, {
                    "label": "Q3(E)"
                }, {
                    "label": "Q4(E)"
                }]
            }],
                "dataset": [{
                "seriesname": "Apple",
                    "valuePosition": "ABOVE",
                    "allowDrag": "0",
                    "data": [{
                    "value": "1200"
                }, {
                    "value": "1500",
                        "dashed": "1"
                }, {
                    "value": "1300",
                        "allowDrag": "1",
                        "dashed": "1"
                }, {
                    "value": "900",
                        "allowDrag": "1",
                        "tooltext": "Predicted sales $value units"
                }]
            }, {
                "seriesname": "Samsung",
                    "allowDrag": "0",
                    "data": [{
                    "value": "600"
                }, {
                    "value": "850",
                        "dashed": "1"
                }, {
                    "value": "1000",
                        "allowDrag": "1",
                        "dashed": "1"
                }, {
                    "value": "1200",
                        "allowDrag": "1",
                        "tooltext": "Predicted sales $value units"
                }]
            }]
        },
            "events": {

            /**
             * @description
             * Triggered every time the data on any of the interactive charts (select-scatter, drag-node, and the dragable charts) is updated by user interaction.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to dragged data plot, such as the data value before and after dragging.
             */

                "chartUpdated": function (eventObj, dataObj) {
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