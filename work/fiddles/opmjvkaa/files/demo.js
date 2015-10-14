FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Visitors by Age Group",
                    "subCaption": "Last year",

                    "bgColor": "#ffffff",
                    "showBorder": "0",
                    "use3DLighting": "0",
                    "showShadow": "0",
                    "enableSmartLabels": "0",
                    "startingAngle": "0",
                    "showPercentValues": "1",
                    "showPercentInTooltip": "0",
                    "decimals": "1",
                    "captionFontSize": "14",
                    "subcaptionFontSize": "14",
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
                    "legendItemFontColor": '#666666',
                    "theme": 'carbon'



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
             * The setChartAttribute() method updates a chart’s attributes with a new attribute-value pair, thus updating the chart’s data definition root (the <chart> node in the XML data or the chart object in the JSON data).
.
             *
             * @param {Object} attribute : To set/update multiple attributes at once, an object containing all the key-value pairs is passed. In case of a single value, a string that is the key (the attribute name) is passed.
             * @param {String} value : If the attributes parameter is a single string value, the value parameter contains the value for that key.
 
             * usage : chartObject.setChartAttribute(attribute, value);
          
             */
    function setAtt() {

        var select = document.getElementById("theme-type");
        console.log(select.value);
        visitChart.setChartAttribute("theme", select.value);


    }

    document.getElementById("theme-type").addEventListener("change", setAtt);

});