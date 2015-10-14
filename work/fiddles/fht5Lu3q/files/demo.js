FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of visitors by age group",
                    "subCaption": "Last year",
                    "enableSmartLabels": "0",
                    "showPercentValues": "1",
                    "showTooltip": "0",
                    "decimals": "1",
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
        },
            "events": {

            //Cancelling chart dispose. Calling the preventDefault() method will trigger the disposeCancelled event.
            "beforeDispose": function (eventObj) {
                eventObj.preventDefault();
            },

            /**
             * @description
             *Triggered when the default behavior of the beforeDispose event is cancelled by calling the eventObj.preventDefault() method.  *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             */

                "disposeCancelled": function (eventObj) {
                var header = document.getElementById('header');
                header.style.display = 'block';

                var tempDiv = document.createElement('div');
                var attrsTable = document.getElementById('attrs-table');
                var titleDiv, valueDiv;
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

    ageGroupChart.render();
    document.getElementById("btn_dispose").addEventListener('click', function () {
        ageGroupChart.dispose();
    });
});