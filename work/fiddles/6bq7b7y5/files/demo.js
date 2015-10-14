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
             * The removeEventListener() method removes the event listener(s) bound to an event using the addEventListener() method.
.
             *
             * @param {String} type: type of the event for which the listener has to be removed
             * @param {Function} handler: handler function which is to be removed for the specified event
             * usage: chartObject.removeEventListener(type,handler);
          
             */
    function handler(eventObj, dataObj) {


        var json = eventObj.sender.getJSONData();
        document.getElementById("data1").innerHTML = "Age Group: " + dataObj.categoryLabel + " | Value: " + dataObj.dataValue;
    }

    //called onclick of Set Event Listener button
    function setHandler() {

        visitChart.addEventListener("dataplotRollOver", handler);
        document.getElementById("data1").innerHTML = "Hover on a data plot to get its details.";
    }

    //called onclick oe Remove Event Listener button
    function rmHandler() {

        visitChart.removeEventListener("dataplotRollOver", handler);
        document.getElementById("data1").innerHTML = "The event listener has been removed. Now, when the mouse pointer is hovered over a pie slice, the slice details will not be shown.";
    }

    document.getElementById("set").addEventListener("click", setHandler);
    document.getElementById("rem").addEventListener("click", rmHandler);

});