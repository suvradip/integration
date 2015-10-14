FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '350',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Visitors by Age Group",
                    "subCaption": "Last year",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12",
                    "theme": "fint",
                    "enableMultiSlicing": "0"
            },
                "data": [{
                "label": "Teenage",
                    "value": "1250400",
                    "isSliced": "1"
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
     * The slicePlotItem() method slices in/slices out a pie/doughnut slice.
     *
     * @param {Number} index: Index of the pie/doughnut slice
     * @param {Boolean} slice: If set to true, it will slice out a slice, which is in the sliced-in state. If the slice is already in the sliced-out state, the state is retained.
     *
     * usage: chartObj.slicePlotItem(index,slice);
     *         
     */
    function slice() {
        var slice_name = document.getElementById("slice_name");
        var flag = ageGroupChart.slicePlotItem(slice_name.value, true);

    }
    document.getElementById("slice_name").addEventListener("click", slice);

});