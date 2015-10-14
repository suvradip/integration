FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '500',
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

            /**
             * @description
             *Triggered before a chart is deleted and cleaned from memory.         *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             */

                "beforeDispose": function (eventObj) {
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
                    if (prop === 'data') {
                        valueDiv.innerHTML = encodeURIComponent(dataObj[prop]);
                    } else {
                        valueDiv.innerHTML = eventObj[prop];
                    }
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