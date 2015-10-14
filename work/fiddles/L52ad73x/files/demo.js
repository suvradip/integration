FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '400',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Visitors by Age Group",
                    "subCaption": "Last year",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12"
            },
                "data": [{
                "label": "Teenage",
                    "value": "1250400"
            }, {
                "label": "Adult",
                    "value": "1463300"
            }, {
                "label": "Mid-age",
                    "value": "1050700"
            }]
        }
    }).render();

    var msg = document.getElementById("msg");
    /**
     * @description
     * The isPlotItemSliced() method checks whether a particular slice of the pie/doughnut chart is sliced-out or sliced-in.

     *
     * @param {Number} index: Index of the pie/doughnut slice being checked
     *
     *
     * usage: chartObj.isPlotItemSliced(index);
     *         
     */
    function slice() {
        var plot_no = document.getElementById("slice_name");
        var flag = ageGroupChart.isPlotItemSliced(plot_no.value);
        if (flag === true) {
            msg.innerHTML = "<span class='slice_status'>sliced.</span>";
        } else {
            msg.innerHTML = "<span class='slice_status'>not sliced.</span>";
        }
    }
    document.getElementById("check_status").addEventListener("click", slice);

});