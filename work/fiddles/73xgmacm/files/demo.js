FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'mscombidy2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Revenues and Profits",
                    "subCaption": "For last year",
                    "captionFontSize": "13",
                    "subCaptionFontSize": "12",
                    "xAxisname": "Month",
                    "pYAxisName": "Amount (In USD)",
                    "sYAxisName": "Profit %",
                    "numberPrefix": "$",
                    "sNumberSuffix": "%",
                    "sYAxisMaxValue": "50",
                    "primaryAxisOnLeft": "0",
                    "theme": "fint",
                    "exportEnabled": "1"
            },
                "categories": [{
                "category": [{
                    "label": "Jan"
                }, {
                    "label": "Feb"
                }, {
                    "label": "Mar"
                }, {
                    "label": "Apr"
                }, {
                    "label": "May"
                }, {
                    "label": "Jun"
                }, {
                    "label": "Jul"
                }, {
                    "label": "Aug"
                }, {
                    "label": "Sep"
                }, {
                    "label": "Oct"
                }, {
                    "label": "Nov"
                }, {
                    "label": "Dec"
                }]
            }],
                "dataset": [{
                "seriesName": "Revenues",
                    "data": [{
                    "value": "16000"
                }, {
                    "value": "20000"
                }, {
                    "value": "18000"
                }, {
                    "value": "19000"
                }, {
                    "value": "15000"
                }, {
                    "value": "21000"
                }, {
                    "value": "16000"
                }, {
                    "value": "20000"
                }, {
                    "value": "17000"
                }, {
                    "value": "22000"
                }, {
                    "value": "19000"
                }, {
                    "value": "23000"
                }]
            }, {
                "seriesName": "Profits",
                    "renderAs": "area",
                    "showValues": "0",
                    "data": [{
                    "value": "4000"
                }, {
                    "value": "5000"
                }, {
                    "value": "3000"
                }, {
                    "value": "4000"
                }, {
                    "value": "1000"
                }, {
                    "value": "7000"
                }, {
                    "value": "1000"
                }, {
                    "value": "4000"
                }, {
                    "value": "1000"
                }, {
                    "value": "8000"
                }, {
                    "value": "2000"
                }, {
                    "value": "7000"
                }]
            }, {
                "seriesName": "Profit %",
                    "parentYAxis": "S",
                    "renderAs": "line",
                    "showValues": "0",
                    "data": [{
                    "value": "25"
                }, {
                    "value": "25"
                }, {
                    "value": "16.66"
                }, {
                    "value": "21.05"
                }, {
                    "value": "6.66"
                }, {
                    "value": "33.33"
                }, {
                    "value": "6.25"
                }, {
                    "value": "25"
                }, {
                    "value": "5.88"
                }, {
                    "value": "36.36"
                }, {
                    "value": "10.52"
                }, {
                    "value": "30.43"
                }]
            }]
        }
    });

    revenueChart.render();


    /**
     * @description
     * The exportChart() method exports a chart as an image or as a PDF document.
To enable exporting of a chart, the exportEnabled attribute (of the chart object) should be set to 1.
When exporting is done programmatically using this method, the export configuration is passed as parameters to this function.

     *
     * @param {Object} options: Index of the pie/doughnut slice being checked
     * options: {
             exportFormat: string: A chart can be exported in one of the following formats:pdf, png or jpg default is png.
             exportFileName: string: File name for the chart being exported, excluding the extension.default is FusionCharts.
             exportTargetWindow: string: When the exportAction parameter is set to download as, this parameter lets you configure whether the return image or PDF will open in the same window (as an attachment for download), or in a new browser window (_blank).default is _self.
             exportHandler: string: URL of the export server.
             exportAction: string: Specifies whether the exported image will be sent back to the browser as download, or whether it will be saved on to the server.
             exportCallback: function: Callback JavaScript function executed when the export process is complete. If this parameter is not assigned a value, then the window.FC_Exported is executed.
             }

     *
     *
     * usage: chartObj.exportChart({"exportFormat":"jpg"});
     *         
     */
    function export_chart() {
        var format = document.getElementById("format").value;
        revenueChart.exportChart({
            "exportFormat": format
        });
    }
    document.getElementById("export").addEventListener("click", export_chart);
});