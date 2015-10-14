FusionCharts.ready(function () {
    var analysisChart = new FusionCharts({
        id: "chart_1",
        type: 'stackedColumn3DLine',
        renderAt: 'chart-container',
        width: '400',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Quarterly Cost Analysis",
                    "subCaption": "Harry's SuperMart",
                    "numberprefix": "$",
                    "xaxisname": "Quarters",
                    "yaxisname": "Cost",
                    "theme": "fint",
                    "showvalues": "0",
                    "captionFontSize": "13"
            },
                "categories": [{
                "category": [{
                    "label": "Quarter 1"
                }, {
                    "label": "Quarter 2"
                }, {
                    "label": "Quarter 3"
                }, {
                    "label": "Quarter 4"
                }]
            }],
                "dataset": [{
                "seriesname": "Fixed Cost",
                    "data": [{
                    "value": "235000"
                }, {
                    "value": "225100"
                }, {
                    "value": "222000"
                }, {
                    "value": "230500"
                }]
            }, {
                "seriesname": "Variable Cost",
                    "data": [{
                    "value": "230000"
                }, {
                    "value": "143000"
                }, {
                    "value": "198000"
                }, {
                    "value": "327600"
                }]
            }, {
                "seriesname": "Budgeted cost",
                    "renderas": "Line",
                    "data": [{
                    "value": "455000"
                }, {
                    "value": "334000"
                }, {
                    "value": "426000"
                }, {
                    "value": "403000"
                }]
            }]
        }
    }).render();
    /**
     * @description
     * The getObjectReference() method returns the DOMElement created inside the chart container by FusionCharts. This is equivalent to accessing the DOMElement using the ref property.
     *  @param {String} id: ID of the chart, whose DOMElement is to be referenced.
     * usage: FusionCharts.getObjectReference(id);
     */


    function replaceSVG() {
        var chart = FusionCharts.getObjectReference("chart_1");
        chart.innerHTML = "<span class='rep_text'>The svg element of the chart is replaced by this text</span>";
    }

    function reDrawSVG() {
        analysisChart.render();
    }
    document.getElementById("get_ref").addEventListener("click", replaceSVG);
    document.getElementById("redraw").addEventListener("click", reDrawSVG);
});