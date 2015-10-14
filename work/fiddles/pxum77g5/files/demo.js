FusionCharts.ready(function () {
    var visitChart = new FusionCharts({
        type: 'msline',
        renderAt: 'chart-container',
        width: '450',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Number of visitors last week",
                    "subCaption": "Bakersfield Central vs Los Angeles Topanga",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12"
            },
                "categories": [{
                "category": [{
                    "label": "Mon"
                }, {
                    "label": "Tue"
                }, {
                    "label": "Wed"
                }, {
                    "vline": "true",
                        "lineposition": "0",
                        "color": "#6baa01",
                        "labelHAlign": "center",
                        "labelPosition": "0",
                        "label": "National holiday",
                        "dashed": "1"
                }, {
                    "label": "Thu"
                }, {
                    "label": "Fri"
                }, {
                    "label": "Sat"
                }, {
                    "label": "Sun"
                }]
            }],
                "dataset": [{
                "seriesname": "Bakersfield Central",
                    "data": [{
                    "value": "15123"
                }, {
                    "value": "14233"
                }, {
                    "value": "25507"
                }, {
                    "value": "9110"
                }, {
                    "value": "15529"
                }, {
                    "value": "20803"
                }, {
                    "value": "19202"
                }]
            }, {
                "seriesname": "Los Angeles Topanga",
                    "data": [{
                    "value": "13400"
                }, {
                    "value": "12800"
                }, {
                    "value": "22800"
                }, {
                    "value": "12400"
                }, {
                    "value": "15800"
                }, {
                    "value": "19800"
                }, {
                    "value": "21800"
                }]
            }],
                "trendlines": [{
                "line": [{
                    "startvalue": "17022",
                        "color": "#6baa01",
                        "valueOnRight": "1",
                        "displayvalue": "Average"
                }]
            }]
        }
    }).render();

    /**
     * @description
     * The getSVGString() method fetches the SVG of a chart, created by FusionCharts while rendering the chart, as a string.
     * usage: chartObj.getSVGString();
     *         
     */

    function svgString() {
        var text = document.createTextNode(visitChart.getSVGString());
        document.getElementById("msg").appendChild(text);
    }
    document.getElementById("get").addEventListener("click", svgString);
});