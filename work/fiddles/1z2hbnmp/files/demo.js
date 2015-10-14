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
             * The getChartAttribute() fetches values of chart attributes explicitly applied to the root chart object (or the chart node element). 


             *
             * @param {String} attribute: To fetch the value of a single attribute, pass the attribute name as a string. For multiple attributes, pass an array of attribute names. Values will be returned in the order of the attribute names in the array.
 
             * usage: chartObject.getChartAttribute(attribute);
          
             */
    document.getElementById("current_value").innerHTML = "Current theme: " + visitChart.getChartAttribute("theme");

    function setAtt() {

        var select = document.getElementById("theme-type");
        console.log(select.value);
        visitChart.setChartAttribute("theme", select.value);
        document.getElementById("current_value").innerHTML = "Current theme: " + visitChart.getChartAttribute("theme");


    }

    document.getElementById("theme-type").addEventListener("change", setAtt);

});