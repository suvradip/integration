FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '450',
        height: '450',
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
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12",
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
        }
    }).render();

    /**
     * @description
     * The centerLabel() method configures the center label in a doughnut chart.

     *
     * @param {String} textLabel: Text to be displayed as the center label in the doughnut chart.
     * @param {Object} options: {
            font: string, 
            fontSize: string,  
            bold: boolean,  
            italic: boolean,  
            color: hexcolor,  
            alpha: alpha,  
            hoverColor: hexcolor,  
            hoverAlpha: alpha,  
            bgColor: hexcolor,  
            bgAlpha: alpha,  
            borderColor: hexcolor,  
            borderAlpha: alpha,
            borderThickness: number,  
            borderRadius: number, 
            padding: number, 
            textPadding: number,  
            toolText: string  
            }
     *
     * usage: chartObj.centerLabel(textLabel,options);
     *         
     */


    function showLabel() {
        revenueChart.centerLabel("This text has been rendered using the centerLabel() method.", {
            'color': '#8e0000'
        });
    }
    revenueChart.addEventListener("rendered", showLabel);
});