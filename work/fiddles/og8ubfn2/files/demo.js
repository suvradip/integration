FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Sales of Liquor",
                    "subCaption": "Last week",
                    "xAxisName": "Day",
                    "yAxisName": "Sales (In USD)",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12",
                    "subcaptionFontBold": "0"
            },

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
        }
    });
    salesChart.render();
    var btn = document.getElementById('set_transparent');
    btn.addEventListener('click', function () {
        /**
     * @description
     * The setTransparent() method sets the background color of the container DOM element, within which the chart is rendered, as transparent. This is not to be confused with the chart’s background.

     * @param {Boolean} transparency: Passing true implies that the chart is transparent.
     * usage: chartObj.setTransparent(transparency);
     *         
     */
        salesChart.setTransparent(true);
        salesChart.render();
        this.disabled = true;
    });
});