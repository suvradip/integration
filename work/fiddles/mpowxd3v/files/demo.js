FusionCharts.ready(function () {
    var radio = [],
        radElem,
        val,
        revenueChart = new FusionCharts({
            type: 'column2d',
            renderAt: 'chart-container',
            width: '500',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "Monthly revenue",
                        "subCaption": "Last year",
                        "xAxisName": "Month",
                        "yAxisName": "Revenue (In USD)",
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
                'beforeRender': function (evt, args) {
                    if (!document.getElementById('controllers')) {
                        var controllers = document.createElement('div'),
                            chartRef = evt.sender,
                            lineOpt,
                            barOpt,
                            columnOpt,
                            //Function to change chart type
                            changeChart = function (event) {
                                var val = event.target.getAttribute('value');
                                val = val && chartRef.chartType(val);
                            };
                        controllers.setAttribute('id', 'controllers');
                        // Create radio button inside div
                        controllers.innerHTML = '<label style="padding: 0 5px; display : inline;"><input name="chart-type" id="line" type="radio" value="line" /> Line chart</label> <label style="padding: 0 5px; display : inline;"><input name="chart-type" id="bar" type="radio" value="bar2d" /> Bar chart</label><label style="padding: 0 5px; display : inline;"><input name="chart-type" id="column" type="radio" value="column2d" checked="true" /> Column chart</label>';
                        args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
                        //get the radio buttons
                        lineOpt = document.getElementById('line');
                        barOpt = document.getElementById('bar');
                        columnOpt = document.getElementById('column');
                        // setting css styles for controllers div
                        controllers.style.cssText = "position: inherit;width: 500px;padding: 0 140px;";
                        //Set event listener for check boxes
                        lineOpt.addEventListener("click", changeChart);
                        barOpt.addEventListener("click", changeChart);
                        columnOpt.addEventListener("click", changeChart);
                    }
                },

                /**
                 * @description
                 * The chartTypeChanged event is triggered when the chart type is explicitly changed by calling the chartType() method on a chart.
                 *
                 * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
                 * @param {Object} dataObj: An object containing all the details related to chart data-the previous and new chart types, in this case.
                 */

                    "chartTypeChanged": function (eventObj, dataObj) {
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

    revenueChart.render();

});