FusionCharts.ready(function () {
    var socialMediaPlan = new FusionCharts({
        type: 'gantt',
        renderAt: 'chart-container',
        width: '750',
        height: '500',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "dateformat": "mm/dd/yyyy",
                    "caption": "Social Media Optimization",
                    "subcaption": "Typical Steps Involved",
                    "theme": "fint",
                    "canvasBorderAlpha": "40"
            },
                "categories": [{
                "category": [{
                    "start": "08/01/2014",
                        "end": "08/31/2014",
                        "label": "Aug '14"
                }, {
                    "start": "09/01/2014",
                        "end": "09/30/2014",
                        "label": "Sep '14"
                }, {
                    "start": "10/01/2014",
                        "end": "10/31/2014",
                        "label": "Oct '14"
                }, {
                    "start": "11/01/2014",
                        "end": "11/30/2014",
                        "label": "Nov '14"
                }, {
                    "start": "12/01/2014",
                        "end": "12/31/2014",
                        "label": "Dec '14"
                }, {
                    "start": "01/01/2015",
                        "end": "01/31/2015",
                        "label": "Jan '15"
                }, {
                    "start": "02/01/2015",
                        "end": "02/28/2015",
                        "label": "Feb '15"
                }, {
                    "start": "03/01/2015",
                        "end": "03/31/2015",
                        "label": "Mar '15"
                }]
            }],
                "processes": {
                "fontsize": "12",
                    "isbold": "1",
                    "align": "right",
                    "process": [{
                    "label": "Identify Customers"
                }, {
                    "label": "Survey 500 Customers"
                }, {
                    "label": "Interpret Requirements"
                }, {
                    "label": "Market Analysis"
                }, {
                    "label": "Brainstorm concepts"
                }, {
                    "label": "Define Ad Requirements"
                }, {
                    "label": "Design & Develop"
                }, {
                    "label": "Mock test"
                }, {
                    "label": "Documentation"
                }, {
                    "label": "Start Campaign"
                }]
            },
                "tasks": {
                "task": [{
                    "start": "08/04/2014",
                        "end": "08/10/2014"
                }, {
                    "start": "08/08/2014",
                        "end": "08/19/2014"
                }, {
                    "start": "08/19/2014",
                        "end": "09/02/2014"
                }, {
                    "start": "08/24/2014",
                        "end": "09/02/2014"
                }, {
                    "start": "09/02/2014",
                        "end": "09/21/2014"
                }, {
                    "start": "09/21/2014",
                        "end": "10/06/2014"
                }, {
                    "start": "10/06/2014",
                        "end": "01/21/2015"
                }, {
                    "start": "01/21/2015",
                        "end": "02/19/2015"
                }, {
                    "start": "01/28/2015",
                        "end": "02/24/2015"
                }, {
                    "start": "02/24/2015",
                        "end": "03/27/2015"
                }]
            }

        },
            "events": {

            /**
             * @description
             * The processRollOut event is triggered when the mouse pointer is rolled out from over a process on the Gantt chart.*
             * @param {Object} eventObj: An object containing all the details related to this event like eventId, sender, etc.
             * @param {Object} dataObj: An object containing all the details related to the process that triggers the event, such as the process label, whether the process is a header, and so on.
             */

                "processRollout": function (eventObj, dataObj) {
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
    }).render();
});