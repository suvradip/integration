FusionCharts.ready(function () {
    var chartConfiguration = {
        "caption": "Sales of Liquor",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Sales (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "showCanvasBorder": "0",
            "plotBorderAlpha": "10",
            "usePlotGradientColor": "0",
            "plotFillAlpha": "50",
            "showXAxisLine": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "showValues": "1",
            "showAlternateHGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5"
    };
    var updateBtn = document.getElementById('update-chart');
    // Event Listener for the update-chart button. Updating the chart with another random set of data. In real life use cases, this could be a different set of data like data for current week..etc
    updateBtn.addEventListener('click', function (e) {
        this.disabled = true;
        // Try to update the chart without giving the actual data. This will be caught in the beforeDataUpdate event
        salesChart.setJSONData({
            chart: chartConfiguration
        });
    });
    var salesChart = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": chartConfiguration,

                "data": [{
                "label": "Mon",
                    "value": "4123"
            }, {
                "label": "Tue",
                    "value": "4633"
            }, {
                "label": "Wed",
                    "value": "5507"
            }, {
                "label": "Thu",
                    "value": "4910"
            }, {
                "label": "Fri",
                    "value": "5529"
            }, {
                "label": "Sat",
                    "value": "5803"
            }, {
                "label": "Sun",
                    "value": "6202"
            }]
        },
        events: {
            // This event will be fired when the data is updated in the chart
            "beforeDataUpdate": function (eventObj, dataObj) {
                if (!dataObj.data || dataObj.format !== 'json' || !dataObj.data.data || dataObj.data.data.length === 0) {
                    // Cancel the data update since the data is not valid
                    eventObj.preventDefault();
                }
            },
            /**
             * @description
             * Triggered when the default behavior of the beforeDataUpdate event is cancelled by calling the eventObj.preventDefault() method.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to chart data such as data format, data source, actual data, etc.
             */
                "dataUpdateCancelled": function (eventObj, dataObj) {
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
                alert(eventObj.eventType);
            }
        }
    })
        .render();
});