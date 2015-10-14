FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '350',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Visitors by Age Group",
                    "subCaption": "Last year",
                    "captionFontSize": "13",
                    "subCaptionFontSize": "12",
                    "theme": "fint"
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
            }, {
                "label": "Senior",
                    "value": "491000"
            }]
        }
    }).render();

    /**
     * @description
     * The startingAngle() method rotates the pie/doughnut chart to a specific angle or by a specific angle. The mode of operation is controlled by the optional second parameter.

     *
     * @param {Number} angle: Angle measure by which the pie/doughnut chart will be rotated. Default: 0
     * @param {Boolean} relative: Mode of operation for the rotation. Specifies whether the angle being set is relative to the current angle or is w.r.t absolute 0.Default: false
     *
     * usage: chartObj.startingAnlge(angle,angle);
     *         
     */
    function warn() {
        document.getElementById("err").innerHTML = "Enter valid number";
    }

    var angle = document.getElementById("angle");

    function rotate_abs() {
        if (isNaN(angle.value) || angle.value === "") {
            warn();
        } else {
            document.getElementById("err").innerHTML = "";
            ageGroupChart.startingAngle(angle.value);
        }
    }

    function rotate_rel() {
        if (isNaN(angle.value) || angle.value === "") {
            warn();
        } else {
            document.getElementById("err").innerHTML = "";
            ageGroupChart.startingAngle(angle.value, true);
        }
    }
    document.getElementById("absolute").addEventListener("click", rotate_abs);
    document.getElementById("relative").addEventListener("click", rotate_rel);
});