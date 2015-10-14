FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Split of Revenue by Product Categories",
                    "subCaption": "2014",
                    "numberPrefix": "$",
                    "theme": "fint",
                    "captionFontSize": "13",
                    "subcaptionFontSize": "12",
                    "subcaptionFontBold": "0",
                    "showValues": "0"
            },
                "data": [{
                "label": "Food",
                    "value": "28504"
            }, {
                "label": "Apparels",
                    "value": "14633"
            }, {
                "label": "Electronics",
                    "value": "10507"
            }, {
                "label": "Household",
                    "value": "4910"
            }]
        }
    });


    /**
     * @description
     * The render() method returns the DOMElement created inside the chart container by FusionCharts. This is equivalent to accessing the DOMElement using the ref property.    
     *
     * @param {String} containerElement: Reference or ID of the DOM element inside which the chart is to be rendered. If this argument is not provided, it is assumed that the renderAt attribute is provided during chart creation.
     *
     *  @param {FusionCharts~DOMInsertModes} insertMode: Method for inserting the chart’s DOM element within the containerElement. there are 3 modes replace, append, prepend. and default is replace
     *
     * @param {Function} callback  Callback function executed after the chart is successfully rendered.
     *
     * usage: chartObj.render();
     *         chartObj.render(containerElement);
     *         chartObj.render(containerElement,insertMode);
     *         chartObj.render(containerElement,insertMode,callback);
     */
    function rend_clbk() {
        revenueChart.render('chart-container', undefined, callBack);
    }

    function callBack() {
        console.log("callback");
        document.getElementById("message").innerHTML = "<i>Message from the callback function: <b>The chart has rendered.</b></i>";
    }


    var button = document.getElementById("render");

    button.addEventListener("click", rend_clbk);



});