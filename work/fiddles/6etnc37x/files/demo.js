FusionCharts.ready(function () {
    var railwayChart = new FusionCharts({
        type: 'dragnode',
        renderAt: 'chart-container',
        width: '500',
        height: '425',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Railway Map",
                    "xaxisminvalue": "0",
                    "xaxismaxvalue": "100",
                    "yaxisminvalue": "0",
                    "yaxismaxvalue": "100",
                    "is3d": "0",
                    "showformbtn": "1",
                    "formaction": "dragnodeData.php",
                    "formtarget": "_blank",
                    "formmethod": "POST",
                    "formbtntitle": "Save",
                    "viewmode": "0",
                    "showplotborder": "1",
                    "plotborderthickness": "4",
                    "theme": "fint",
                    "showcanvasborder": "1",
                    "canvasborderalpha": "20",
                    "animation": "0"
            },
                "dataset": [{
                "data": [{
                    "id": "01",
                        "label": "Santa Monica",
                        "color": "#ffffff",
                        "x": "16",
                        "y": "54",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "02",
                        "label": "Los Angeles",
                        "color": "#ffffff",
                        "x": "27",
                        "y": "54",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "03",
                        "label": "Ontario",
                        "color": "#ffffff",
                        "x": "48",
                        "y": "54",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "04",
                        "label": "Phoenix",
                        "color": "#ffffff",
                        "x": "85",
                        "y": "54",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "05",
                        "label": "Flagstaff",
                        "color": "#ffffff",
                        "x": "85",
                        "y": "80",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "06",
                        "label": "Barstow",
                        "color": "#ffffff",
                        "x": "62",
                        "y": "80",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "07",
                        "label": "San Diego",
                        "color": "#ffffff",
                        "x": "35",
                        "y": "30",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "08",
                        "label": "San Ysidro",
                        "color": "#ffffff",
                        "x": "40",
                        "y": "12",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "09",
                        "label": "Las Vegas",
                        "color": "#ffffff",
                        "x": "68",
                        "y": "93",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "10",
                        "label": "",
                        "color": "#ffffff",
                        "x": "12",
                        "y": "98",
                        "radius": "0",
                        "shape": "circle"
                }, {
                    "id": "11",
                        "label": "",
                        "color": "#ffffff",
                        "x": "100",
                        "y": "80",
                        "radius": "0",
                        "shape": "circle"
                }, {
                    "id": "12",
                        "label": "",
                        "color": "#ffffff",
                        "x": "99",
                        "y": "40",
                        "radius": "0",
                        "shape": "circle"
                }, {
                    "id": "13",
                        "label": "Yuma",
                        "color": "#ffffff",
                        "x": "70",
                        "y": "30",
                        "radius": "30",
                        "shape": "circle"
                }, {
                    "id": "14",
                        "label": "",
                        "color": "#ffffff",
                        "x": "100",
                        "y": "30",
                        "radius": "0",
                        "shape": "circle"
                }, {
                    "x": "25",
                        "y": "25",
                        "id": "MyLoc",
                        "datasetid": "0",
                        "name": "My Edited Location",
                        "tooltext": "My Location",
                        "color": "#FFFFFF",
                        "alpha": "100",
                        "labelalign": "middle",
                        "allowdrag": "1",
                        "shape": "circle",
                        "radius": "45"
                }]
            }],
                "connectors": [{
                "color": "#ffffff",
                    "stdthickness": "10",
                    "connector": [{
                    "strength": "2",
                        "from": "01",
                        "to": "02",
                        "color": "#fec110",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "02",
                        "to": "03",
                        "color": "#fec110",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "03",
                        "to": "04",
                        "color": "#fec110",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "04",
                        "to": "12",
                        "color": "#fec110",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "04",
                        "to": "05",
                        "color": "#a6aaad",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "09",
                        "to": "06",
                        "color": "#0178bc",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "06",
                        "to": "03",
                        "color": "#0178bc",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "03",
                        "to": "07",
                        "color": "#0178bc",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "05",
                        "to": "06",
                        "color": "#f1277d",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "06",
                        "to": "11",
                        "color": "#f1277d",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "02",
                        "to": "07",
                        "color": "#c1c733",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "07",
                        "to": "08",
                        "color": "#c1c733",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "02",
                        "to": "10",
                        "color": "#c1c733",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "07",
                        "to": "13",
                        "color": "#6d6e70",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }, {
                    "strength": "2",
                        "from": "13",
                        "to": "14",
                        "color": "#6d6e70",
                        "arrowatstart": "0",
                        "arrowatend": "0"
                }]
            }]
        },
            "events": {

            /**
             * @description
             * Triggered when a new label is added on the drag-node chart.
             *
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to chart data such as the x and y position of the label, label text etc.
             */

                "labelAdded": function (eventObj, dataObj) {
                console.log(eventObj);
                var header = document.getElementById('header');
                header.style.display = 'block';

                var tempDiv = document.createElement('div');
                var attrsTable = document.getElementById('attrs-table');
                var titleDiv, valueDiv;
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

    railwayChart.render();
});