FusionCharts.ready(ready);
/**
     * @description
     * The static ready() method allows to register callback functions that are executed when the FusionCharts library is ready to be used. In general, the FusionCharts framework is ready after the DOMContentLoaded browser event has been triggered and all the initial dependent files/modules are available.

     * @param {Function} readyCallback: Callback function executed when the FusionCharts framework is ready.
     * @param {*} args: Argument to be passed to the callback function. Default: FusionCharts
     * @param {Function} context: To execute a function, passed using the fn parameter, in a different scope than the default FusionCharts scope, pass the appropriate class object here. Default: FusionCharts
     * usage: FusionCharts.ready(readyCallback,args,context)
     *         
     */
function ready() {
    var rend = document.getElementById("render");
    rend.hidden = false;
    rend.addEventListener("click", renderChart);

}

function renderChart() {
    var revenueChart = new FusionCharts({
        type: 'msstackedcolumn2d',
        renderAt: 'chart-container',
        width: '450',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Product-wise break-up of quarterly revenue in last year",
                    "subcaption": "Harry's SuperMart",
                    "xaxisname": "Quarter",
                    "yaxisname": "Sales (In USD)",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subCaptionFontSize": "12"
            },
                "categories": [{
                "category": [{
                    "label": "Q1"
                }, {
                    "label": "Q2"
                }, {
                    "label": "Q3"
                }, {
                    "label": "Q4"
                }]
            }],
                "dataset": [{
                "dataset": [{
                    "seriesname": "Processed Food",
                        "data": [{
                        "value": "30"
                    }, {
                        "value": "26"
                    }, {
                        "value": "29"
                    }, {
                        "value": "31"
                    }]
                }, {
                    "seriesname": "Un-Processed Food",
                        "data": [{
                        "value": "21"
                    }, {
                        "value": "28"
                    }, {
                        "value": "39"
                    }, {
                        "value": "41"
                    }]
                }]
            }, {
                "dataset": [{
                    "seriesname": "Electronics",
                        "data": [{
                        "value": "27"
                    }, {
                        "value": "25"
                    }, {
                        "value": "28"
                    }, {
                        "value": "26"
                    }]
                }, {
                    "seriesname": "Apparels",
                        "data": [{
                        "value": "17"
                    }, {
                        "value": "15"
                    }, {
                        "value": "18"
                    }, {
                        "value": "16"
                    }]
                }, {
                    "seriesname": "Others",
                        "data": [{
                        "value": "12"
                    }, {
                        "value": "17"
                    }, {
                        "value": "16"
                    }, {
                        "value": "15"
                    }]
                }]
            }]
        }
    }).render();

}