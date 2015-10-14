FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '400',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Visitors by Age Group",
                    "subCaption": "Last year",
                    "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                    "bgColor": "#ffffff",
                    "showBorder": "0",
                    "use3DLighting": "0",
                    "showShadow": "0",
                    "enableSmartLabels": "0",
                    "startingAngle": "0",
                    "showPercentValues": "1",
                    "showPercentInTooltip": "0",
                    "decimals": "1",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12",
                    "subcaptionFontBold": "0",
                    "toolTipColor": "#ffffff",
                    "toolTipBorderThickness": "0",
                    "toolTipBgColor": "#000000",
                    "toolTipBgAlpha": "80",
                    "toolTipBorderRadius": "2",
                    "toolTipPadding": "5",
                    "showHoverEffect": "1",
                    "showLegend": "1",
                    "legendBgColor": "#ffffff",
                    "legendBorderAlpha": '0',
                    "legendShadow": '0',
                    "legendItemFontSize": '10',
                    "legendItemFontColor": '#666666'
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
        }
    });

    visitChart.render();


    /**
             * @description
             * The addEventListener() method is used to listen to the events across all FusionCharts  instonces on a page and executes custom functions when an event is triggered.
             *
             * @param {String} type: type of the event need to be handeled.
             * @param {Function} handler: handler function is called whenever the specified event is triggered.  
             * usage: chartObject.addEventListener(type,handler);
          
             */
    function handler(eventObj, dataObj) {
        console.log(dataObj);

        var json = eventObj.sender.getJSONData();
        document.getElementById("data2").innerHTML = "Age Group: " + dataObj.categoryLabel + " | Value: " + dataObj.dataValue;
    }
    visitChart.addEventListener("dataplotRollOver", handler);
});