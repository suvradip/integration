FusionCharts.ready(function () {
    var ageGroupChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '500',
        height: '250',
        dataFormat: 'jsonurl',
        dataSource: 'http://static.fusioncharts.com/fiddle/getSampleJSON.php',
            "events": {
            /**
             * @description
             * Triggered when chart data is successfully loaded from a URL (instead of a static JSON or XML file from the system) to the Fusion Charts class object.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender (the chart object itself), etc.
             * @param {Object} dataObj: An object containing all the details related to the data being loaded like data format, url, actual data, etc.
             */
                "dataLoadRequestCompleted": function (eventObj, dataObj) {
                console.log(eventObj);
                var header = document.getElementById('header');
                header.style.display = 'block';

                var tempDiv = document.createElement('div');
                var attrsTable = document.getElementById('attrs-table');
                var titleDiv, valueDiv;
                // Iterating through all the properties in argObj and adding it to the DOM
                for (var prop in dataObj) {
                    titleDiv = document.createElement('div');
                    titleDiv.className = 'title';
                    titleDiv.innerHTML = prop;

                    valueDiv = document.createElement('div');
                    valueDiv.className = 'value';
                    valueDiv.innerHTML = dataObj[prop];

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