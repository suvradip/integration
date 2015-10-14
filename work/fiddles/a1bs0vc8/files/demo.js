FusionCharts.ready(function () {
    var data_2013 = '<chart caption="Half Yearly Revenue Analysis of 2013" yaxisname="Revenue" numberprefix="$" yaxismaxvalue="250000" showborder="0" theme="fint"><set label="Jul" value="150000" tooltext="Occupancy: 67%{br}Revenue:$150k{br}3 conferences hosted!" /><set label="Aug" value="130000" tooltext="Occupancy: 64%{br}Revenue:$130k{br}Lean summer period!" /><set label="Sep" tooltext="Occupancy: 44%{br}Revenue: $80k{br}Reason: Renovating the Lobby" value="95000" /><set label="Oct" value="170000" tooltext="Occupancy: 73%{br}Revenue:$170k{br}Anniversary Discount: 25%" /><set label="Nov" value="155000" tooltext="Occupancy: 70%{br}Revenue:$155k{br}2 conferences cancelled!" /><set label="Dec" value="230000" tooltext="Occupancy: 95%{br}Revenue:$230k{br}Crossed last year record!" /></chart>';

    var data_2014 = '<chart caption="Half Yearly Revenue Analysis of 2014" yaxisname="Revenue" numberprefix="$" yaxismaxvalue="2500" showborder="0" theme="fint"><set label="Jul" value="250000" tooltext="Occupancy: 67%{br}Revenue:$150k{br}3 conferences hosted!" /><set label="Aug" value="300000" tooltext="Occupancy: 64%{br}Revenue:$130k{br}Lean summer period!" /><set label="Sep" tooltext="Occupancy: 44%{br}Revenue: $80k{br}Reason: Renovating the Lobby" value="50000" /><set label="Oct" value="270000" tooltext="Occupancy: 73%{br}Revenue:$170k{br}Anniversary Discount: 25%" /><set label="Nov" value="55000" tooltext="Occupancy: 70%{br}Revenue:$155k{br}2 conferences cancelled!" /><set label="Dec" value="330000" tooltext="Occupancy: 95%{br}Revenue:$230k{br}Crossed last year record!" /></chart>';
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '250',
        dataFormat: 'xml',
        dataSource: data_2013
    });
    revenueChart.render();
    /**
     * @description
     * The setDataXML() method sets XML data for a chart, equivalent to the setXMLData() or the setChartData() methods. It sets chart data in the XML data format. When this function is called on a chart that has already rendered, it immediately updates the chart with the new data. The function can also be used to set data for a new chart.
     * @param {String} data: XML data to be set for the chart, as a string
     * usage: chartObj.setDataXML(data);           
     */
    function set() {
        var data = document.getElementById("year").value;
        if (data == "2013") {
            revenueChart.setDataXML(data_2013);
        } else {
            revenueChart.setDataXML(data_2014);
        }

    }
    document.getElementById("set_xml").addEventListener("click", set);
});