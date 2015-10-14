/**
 * @description
 * Triggered when the FusionCharts library is ready to be used.
 *
 * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
 * @param {Object} dataObj: An object containing all the details related to chart data such as the x and y position of the label, label text, etc.
 */
FusionCharts.addEventListener('ready', function (eventObj, dataObj) {
    console.log(eventObj);
    var header = document.getElementById('header');
    header.style.display = 'block';

    var tempDiv = document.createElement('div');
    var attrsTable = document.getElementById('attrs-table');
    var titleDiv, valueDiv;
    for (prop in dataObj) {
        titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.innerHTML = prop;

        valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        // Version information will be in array.Hence joining the version with the character '.'
        if(dataObj[prop].join) {
            valueDiv.innerHTML = (dataObj[prop]).join('.');
        } else {
            valueDiv.innerHTML = (dataObj[prop]);
        }

        tempDiv.appendChild(titleDiv);
        tempDiv.appendChild(valueDiv);
    }

    attrsTable.innerHTML = '';
    attrsTable.appendChild(tempDiv);
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
        }


    });

    ageGroupChart.render();
});