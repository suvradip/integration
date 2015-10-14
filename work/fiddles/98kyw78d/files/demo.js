FusionCharts.ready(function () {
    var salesChart = new FusionCharts({
        type: 'vled',
        renderAt: 'chart-container',
        id: 'myChart',
        width: '200',
        height: '300',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Current Flow on Main Meter",
                    "subcaption": "New York Store",
                    "chartleftmargin": "40",
                    "chartbottommargin": "20",
                    "gaugebgcolor": "#ff0000",
                    "gaugefillcolor": "#1f0601",
                    "lowerlimit": "100",
                    "upperlimit": "400",
                    "numbersuffix": " amp",
                    "bgalpha": "0",
                    "borderalpha": "20",
                    "showborder": "1",
                    "minortmalpha": "0",
                    "animation": "1",
                    "showvalue": "1",
                    "valuespadding": "10",
                    "valuefontbold": "1",
                    "ledgap": "0"
            },
                "colorrange": {
                "color": [{
                    "minvalue": "100",
                        "maxvalue": "400",
                        "code": "#ff0000"
                }]
            },
                "value": "250"
        },
            "events": {
            "rendered": function (evt, data) {
                var btn = document.getElementById('print');
                btn.addEventListener('click', function () {
                    evt.sender.print();
                });
            },
                // Cancelling the print action. This will trigger the printCancelled event
                "beforePrint": function (eventObj) {
                    eventObj.preventDefault();
                },     

                /**
                 * @description
                 *Triggered when the default behavior of the beforePrint event is cancelled by calling the eventObj.preventDefault() method.  *
                 * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
                 */
                
                "printCancelled": function (eventObj) {
                var header = document.getElementById('header');
                header.style.display = 'block';

                var tempDiv = document.createElement('div');
                var attrsTable = document.getElementById('attrs-table');
                var titleDiv, valueDiv;
                // Iterating through all the properties in argObj and adding it to the DOM
                for (var prop in eventObj) {
                    titleDiv = document.createElement('div');
                    titleDiv.className = 'title';
                    titleDiv.innerHTML = prop;

                    valueDiv = document.createElement('div');
                    valueDiv.className = 'value';
                    valueDiv.innerHTML = eventObj[prop];

                    tempDiv.appendChild(titleDiv);
                    tempDiv.appendChild(valueDiv);
                }
                attrsTable.innerHTML = '';
                attrsTable.appendChild(tempDiv);
            }
        }
    });
    salesChart.render();


});
//Update data using intervals
setInterval(function () {
    var num = Math.floor(Math.random() * 150) + 150;
    FusionCharts("myChart").feedData("&value=" + num);
}, 3000);