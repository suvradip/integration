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

    function addListener() {
        FusionCharts.addEventListener("dataplotRollOver", handler);
    }
    
    /**
             * @description
             * The static removeEventListener() method Removes the event listener(s) bound to an event configured for all charts on the page.
.
             *
             * @param {String, Array} type: Type (name) of the event whose listener(s) has to be removed
             * @param {Function} listener: Listener function to remove
             * usage: FusionCharts.removeEventListener(type,listener);
          
             */

    function removeListener() {
        FusionCharts.removeEventListener("dataplotRollOver", handler);
        document.getElementById("data1").innerHTML = "The event listener has been removed.";
    }

    document.getElementById("add_lstnr").addEventListener("click", addListener);

    document.getElementById("rem_lstnr").addEventListener("click", removeListener);

});