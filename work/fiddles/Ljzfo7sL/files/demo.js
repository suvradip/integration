FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'scrollline2d',
        dataFormat: 'json',
        renderAt: 'chart-container',
        width: '450',
        height: '250',
        dataSource: {
            "chart": {
                "caption": "Sales Trends",
                    "subCaption": "(FY 2012 to FY 2013)",
                    "xAxisName": "Month",
                    "yAxisName": "Revenue",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "showValues": "0",
                    "captionFontSize": "13",
                    "subCaptionFontSize": "12",
                    "subCaptionFontBold": "0"
            },
                "categories": [{
                "category": [{
                    "label": "Jan 2012"
                }, {
                    "label": "Feb 2012"
                }, {
                    "label": "Mar 2012"
                }, {
                    "label": "Apr 2012"
                }, {
                    "label": "May 2012"
                }, {
                    "label": "Jun 2012"
                }, {
                    "label": "Jul 2012"
                }, {
                    "label": "Aug 2012"
                }, {
                    "label": "Sep 2012"
                }, {
                    "label": "Oct 2012"
                }, {
                    "label": "Nov 2012"
                }, {
                    "label": "Dec 2012"
                }, {
                    "label": "Jan 2013"
                }, {
                    "label": "Feb 2013"
                }, {
                    "label": "Mar 2013"
                }, {
                    "label": "Apr 2013"
                }, {
                    "label": "May 2013"
                }, {
                    "label": "Jun 2013"
                }, {
                    "label": "Jul 2013"
                }, {
                    "label": "Aug 2013"
                }, {
                    "label": "Sep 2013"
                }, {
                    "label": "Oct 2013"
                }, {
                    "label": "Nov 2013"
                }, {
                    "label": "Dec 2013"
                }]
            }],
                "dataset": [{
                "data": [{
                    "value": "27400"
                }, {
                    "value": "29800"
                }, {
                    "value": "25800"
                }, {
                    "value": "26800"
                }, {
                    "value": "29600"
                }, {
                    "value": "32600"
                }, {
                    "value": "31800"
                }, {
                    "value": "36700"
                }, {
                    "value": "29700"
                }, {
                    "value": "31900"
                }, {
                    "value": "34800"
                }, {
                    "value": "24800"
                }, {
                    "value": "26300"
                }, {
                    "value": "31800"
                }, {
                    "value": "30900"
                }, {
                    "value": "33000"
                }, {
                    "value": "36200"
                }, {
                    "value": "32100"
                }, {
                    "value": "37500"
                }, {
                    "value": "38500"
                }, {
                    "value": "35400"
                }, {
                    "value": "38200"
                }, {
                    "value": "33300"
                }, {
                    "value": "38300"
                }]
            }]
        }
    }).render();


    /**
     * @description
     * The resizeTO() method resizes the chart to the specified width and height. The values for the width and height are passed.   
     * @param {Number} width: it can be just a number or percentage
     * @param {Number} height: it can be just a number or pecentage
     * usage:  chartObj.resizeTo(width,height);
     */

    function isPercent(w, h) {
        if (w.slice(-1) == '%' && h.slice(-1) == '%') {
            if (isNaN(w.slice(0, -1)) || isNaN(h.slice(0, -1))) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }

    function resizeto() {
        var width = document.getElementById("width").value;
        var height = document.getElementById("height").value;
        if ((isPercent(width, height))) {
            document.getElementById("msg").innerHTML = "";
            console.log(width, height);
            salesChart.resizeTo(width, height);

        } else if (isNaN(width) || (isNaN(height)) || width === "" || height === "") {
            document.getElementById("msg").innerHTML = "<span class='err'> Specify proper number or percentage</span>";
            console.log("nan");
        } else {
            document.getElementById("msg").innerHTML = "";
            console.log(width, height);
            salesChart.resizeTo(width, height);

        }
    }
    document.getElementById("resize").addEventListener("click", resizeto);

});