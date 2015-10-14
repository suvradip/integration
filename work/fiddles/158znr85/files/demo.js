FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        id: 'fcChart',
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '500',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Revenue by Product Categories",
                    "subCaption": "Last year",
                    "numberPrefix": "$",
                    "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                    "bgColor": "#ffffff",
                    "showBorder": "0",
                    "use3DLighting": "0",
                    "showShadow": "0",
                    "enableSmartLabels": "0",
                    "startingAngle": "310",
                    "showLabels": "0",
                    "showPercentValues": "1",
                    "showLegend": "1",
                    "legendShadow": "0",
                    "legendBorderAlpha": "0",
                    "defaultCenterLabel": "Total revenue: $64.08K",
                    "centerLabel": "Revenue from $label: $value",
                    "centerLabelBold": "1",
                    "showTooltip": "0",
                    "decimals": "0",
                    "captionFontSize": "14",
                    "subcaptionFontSize": "14",
                    "subcaptionFontBold": "0"
            },
                "data": [{
                "label": "Food",
                    "value": "28504"
            }, {
                "label": "Apparels",
                    "value": "14633"
            }, {
                "label": "Electronics",
                    "value": "10507"
            }, {
                "label": "Household",
                    "value": "4910"
            }]
        },
            "events": {

            /**
             * @description
             * Triggered every time the center label text in the doughnut chart changes.             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to the chart, such as the chart width and height, the center label text, and so on.
             */

                "centerLabelChanged": function (eventObj, dataObj) {
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