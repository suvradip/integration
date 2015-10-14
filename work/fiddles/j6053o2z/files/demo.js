FusionCharts.ready(function () {
    var chart_1 = new FusionCharts({
        type: 'pie3d',
        renderAt: 'chart-container1',
        width: '400',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Revenue Comparison",
                    "subCaption": "2012",
                    "numberPrefix": "$",
                    "theme": "fint"
            },
                "data": [{
                "label": "Food products",
                    "value": "2500"
            }, {
                "label": "Electronics",
                    "value": "2000"
            }]
        }
    });
    chart_1.render();

    var chart_2 = new FusionCharts({
        type: 'pie3d',
        renderAt: 'chart-container2',
        width: '400',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Revenue Comparison",
                    "subCaption": "2013",
                    "numberPrefix": "$",
                    "theme": "fint"
            },
                "data": [{
                "label": "Food products",
                    "value": "2600"
            }, {
                "label": "Electronics",
                    "value": "1800"
            }]
        }
    });
    chart_2.render();

    var chart_3 = new FusionCharts({
        type: 'pie3d',
        renderAt: 'chart-container3',
        width: '400',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Revenue Comparison",
                    "subCaption": "2014",
                    "numberPrefix": "$",
                    "theme": "fint"
            },
                "data": [{
                "label": "Food products",
                    "value": "2800"
            }, {
                "label": "Electronics",
                    "value": "2500"
            }]
        }
    });
    chart_3.render();

    function handler(eventObj, dataObj) {


        var json = eventObj.sender.getJSONData();
        document.getElementById("data1").innerHTML = "Label: " + dataObj.categoryLabel + " | Value: " + dataObj.dataValue;
    }
    
    /**
     * @description
     * The static addEventListener() Listens to events across all FusionCharts instances on a page and executes custom functions when an event is triggered.
     * @param {String or array} type: Type (name) of the event to listen to. To register the listener for multiple events in the same registration call, provide all event names as an array.
             * @param {FusionCharts~eventListener} listener: Function to be exceuted when the event is triggered. If multiple listeners are bound to an event, the listeners are executed in the order of definition, with arguments specific to the triggered event.
             * usage: FusionCharts.addEventListener(type,listener);
     */

    function addListener() {
        FusionCharts.addEventListener("dataplotRollOver", handler);
    }

    document.getElementById("add_lstnr").addEventListener("click", addListener);

});