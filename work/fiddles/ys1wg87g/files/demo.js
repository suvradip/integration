FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '450',
        height: '150',
        dataFormat: 'xml',
        dataSource: "",
            "events": {

            /**
             * @description
             * Triggered when no data is passed to the chart.*
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             */

                "noDataToDisplay": function (eventObj) {
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
});