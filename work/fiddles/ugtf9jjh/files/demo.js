FusionCharts.ready(function () {
    var footfallChart = new FusionCharts({
        id: "mychart",
        type: 'realtimecolumn',
        renderAt: 'chart-container',
        width: '500',
        height: '210',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Harry's Supermart - Bakersfield Central",
                    "subCaption": "Footfalls",
                    "showrealtimevalue": "1",
                    "dataStreamURL": "explore/data.php",
                    "paletteColors": "#008ee4,#9b59b6",
                    "borderAlpha": "0",
                    "yaxismaxvalue": "20",
                    "numdisplaysets": "10",
                    "usePlotGradientColor": "0",
                    "plotBorderAlpha": "0",
                    "canvasBorderAlpha": "20",
                    "labeldisplay": "rotate",
                    "slantLabels": "1",
                    "showLegend": "0",
                    "bgAlpha": "0",
                    "showValues": "0",
                    "numbersuffix": " Customers",
                    "showlabels": "1",
                    "animation": "0",
                    "showRealTimeValue": "0"
            },
                "categories": [{
                "category": [{

                }]
            }],
                "dataset": [{
                "seriesname": "Footfall",
                    "alpha": "100"
            }]
        },
        events: {
            'beforeRender': function (evt, arg) {
                var controllers = document.createElement('div');
                controllers.setAttribute('id', 'tableCont');
                controllers.innerHTML = "<div id='errorView' style='width:450px;border: 2px solid #666666;background-color:#9b545b;  color:#ffffff;display:none;padding: 3px;float: left; margin-left: 80px;margin-top: 40px;'></div>";
                //Display container div and write table
                arg.container.parentNode.insertBefore(controllers, arg.container.nextSibling);

            },

            /**
             * @description
             * The realtimeUpdateError event is triggered every time there is an error in updating chart data in real-time, using the dataStreamURL attribute.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to chart data such as the source of the real-time data, error message, etc.
             */

                'RealtimeUpdateError': function (eventObj, dataObj) {
                var dispBox = document.getElementById("errorView");
                dispBox.style.display = "block";
                dispBox.innerHTML = "Problem occurred while updating real-time data. The error status code is" + dataObj.httpStatus;

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