FusionCharts.ready(function () {
    var qra_data = {
        "chart": {
            "caption": "Quarterly revenue analysis-2014",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Quarter",
                "yAxisname": "Revenue",
                "numberPrefix": "$",
                "theme": "fint",
                "captionFontSize": "13",
                "subCaptionFontSize": "12"
        },

            "data": [{
            "label": "Q1",
                "value": "2850400"
        }, {
            "label": "Q2",
                "value": "1463300"
        }, {
            "label": "Q3",
                "value": "1050700"
        }, {
            "label": "Q4",
                "value": "4910000"
        }]
    };

    var qrc_data = {
        "chart": {
            "caption": "Quarterly revenue comparision-2013 and 2014",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Quarter",
                "yAxisName": "Revenue",
                "numberPrefix": "$",
                "theme": "fint",
                "captionFontSize": "13",
                "subCaptionFontSize": "12"
        },
            "categories": [{
            "category": []
        }],
            "dataset": []
    };

    var qrfp_data = {
        "chart": {
            "caption": "Quarterly revenue from food products-2014",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Quarter",
                "yAxisname": "Revenue",
                "numberPrefix": "$",
                "theme": "fint",
                "captionFontSize": "13",
                "subCaptionFontSize": "12"
        },

            "data": [{
            "label": "Q1",
                "value": "175000"
        }, {
            "label": "Q2",
                "value": "646520"
        }, {
            "label": "Q3",
                "value": "245000"
        }, {
            "label": "Q4",
                "value": "345690"
        }]
    };

    var qrnfp_data = {
        "chart": {
            "caption": "Quarterly revenue from non-food products-2014",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Quarter",
                "yAxisname": "Revenue",
                "numberPrefix": "$",
                "theme": "fint",
                "captionFontSize": "13",
                "subCaptionFontSize": "12"
        },

            "data": [{
            "label": "Q1",
                "value": "254300"
        }, {
            "label": "Q2",
                "value": "325400"
        }, {
            "label": "Q3",
                "value": "253000"
        }, {
            "label": "Q4",
                "value": "452000"
        }]
    };

    var rcfnfp_data = {
        "chart": {
            "caption": "Quarterly revenue comparison for food and non-food products-2014",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Quarter",
                "yAxisName": "Revenue",
                "numberPrefix": "$",
                "theme": "fint",
                "captionFontSize": "13",
                "subCaptionFontSize": "12"
        },
            "categories": [],
            "dataset": []
    };

    var revenueChart = new FusionCharts({
        type: 'pie3d',
        renderAt: 'chart-container',
        width: '400',
        height: '250',
        dataFormat: 'json',
        dataSource: qrc_data
    });

    function render() {
        var data = document.getElementById("data").value;

        if (data == 'qra') {
            revenueChart.setChartData(qra_data);
        } else if (data == 'qrc') {
            revenueChart.setChartData(qrc_data);
        } else if (data == 'qrfp') {
            revenueChart.setChartData(qrfp_data);
        } else if (data == 'qrnfp') {
            revenueChart.setChartData(qrnfp_data);
        } else if (data == 'rcfnfp') {
            revenueChart.setChartData(rcfnfp_data);
        }

        revenueChart.render();

        /**
     * @description
     * The dataReady() method determines whether a chart will render properly with the data set on it. This includes data that is set using the setChartData() or setChartDataUrl() methods.

     * @param {Boolean} available: Setting this parameter to true returns the status of the data, irrespective of its compatibility with the chart type. In that case, this function will return false if data provided to the chart triggers the dataLoadError or dataInvalid events
     * usage: chartObj.dataReady(available);
     *         
     */

        var flag = revenueChart.dataReady();
        var msg = document.getElementById("msg");
        if (flag) {
            msg.innerHTML = "Data valid. Scroll down to view the chart.";
        } else {
            msg.innerHTML = "Data invalid";
        }
    }


    document.getElementById("rend").addEventListener("click", render);
});