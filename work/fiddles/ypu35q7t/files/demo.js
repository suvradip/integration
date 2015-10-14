FusionCharts.ready(function () {
    var data = {
        "chart": {
            "caption": "Split of Revenue by Product Categories",
                "subCaption": "Last year",
                "numberPrefix": "$",
                "theme": "fint",
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
    };

    var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '350',
        height: '350',
        dataFormat: 'json',
        dataSource: data
    }).render();

    /**
     * @description
     * FusionCharts supports a number of formats in which data can be provided. The static transcodeData() method transcodes data from one supported format to another, without initializing a new instance of FusionCharts. It is very useful when you already have a set of data stored or prepared in one FusionCharts data format and want to convert it to another format. The fact that we do not need to instantiate a new FusionCharts instance speeds the conversion process.
     *
     * @param {Object} data: Data to transcode
     * @param {FusionCharts-dataFormat} source: Source format
     * @param {FusionCharts-dataFormat} target: Target format
     * @param {Boolean} advanced: Request the transcoding to return data in a verbose format where it returns the conversion result along with additional trancosing information. default: false.
     * usage: FusionCharts.transcodeData();
     *         
     */
    function getTranscodedData() {

        var csv = FusionCharts.transcodeData(data, "json", "csv");
        csv = csv.replace(/\n/g, "<br>");
        document.getElementById('msg').innerHTML = csv;
    }

    document.getElementById("transcode_data").addEventListener("click", getTranscodedData);
});