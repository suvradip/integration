/*
 * @description
 * The formatNumber() method formats input numbers based on the formatting configuration passed. The function can be called globally on the FusionCharts object or on a specific instance of FusionCharts Suite XT.
 * @param {Number} number: Number to be formatted
 * @param {String} type: When called globally on the FusionCharts object, the function applies the configuration settings to all numbers on the chart. This parameter selectively formats numbers based on chart elements, by taking yaxisvalues, xaxisvalues, and datalabels as values.Default: datalabels
 * @param {Object} config: Optional number formatting attributes to override the default number formatting options of a chart.
 While calling formatNumber on the FusionCharts object, this becomes the second parameter.

*/
function format() {
    var number = document.getElementById("number").value;
    var msg = document.getElementById("msg");
    msg.innerHTML = FusionCharts.formatNumber(number, {
        "numberPrefix": "$"
    });

}
document.getElementById("format").addEventListener("click", format);