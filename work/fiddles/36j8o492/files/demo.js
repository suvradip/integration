FusionCharts.ready(function () {
    var chart_options = {
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Revenue by Product Categories",
                    "subCaption": "2014",
                    "numberPrefix": "$",
                    "theme": "fint",
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
    };

    /**
     * @description
     * The render() method uses a one-line argument parameter to render FusionCharts directly into the container specified in the arguments.
     *
     * @param {Object} options: Chart configuration options required to create a chart. The options must include the renderAt parameter for the chart to render instantly.
     *
     * @param {Function} callback: Callback function executed when the chart is successfully rendered.
     * usage: FusionCharts.render(options);
     *         FusionCharts.render(options,callback);

     */
    function render_chart() {
        //msg.innerHTML = "";
        var revenueChart = new FusionCharts.render(chart_options);

    }

    document.getElementById("render").addEventListener("click", render_chart);



});