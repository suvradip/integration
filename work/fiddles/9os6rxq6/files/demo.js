FusionCharts.ready(function () {
    var data = '<chart caption="Half-yearly Revenue Analysis" yaxisname="Revenue" numberprefix="$" yaxismaxvalue="250000" showborder="0" theme="fint"><set label="Jul" value="150000" tooltext="Occupancy: 67%{br}Revenue:$150k{br}3 conferences hosted!" /><set label="Aug" value="130000" tooltext="Occupancy: 64%{br}Revenue:$130k{br}Lean summer period!" /><set label="Sep" tooltext="Occupancy: 44%{br}Revenue: $80k{br}Reason: Renovating the Lobby" value="95000" /><set label="Oct" value="170000" tooltext="Occupancy: 73%{br}Revenue:$170k{br}Anniversary Discount: 25%" /><set label="Nov" value="155000" tooltext="Occupancy: 70%{br}Revenue:$155k{br}2 conferences cancelled!" /><set label="Dec" value="230000" tooltext="Occupancy: 95%{br}Revenue:$230k{br}Crossed last year record!" /></chart>';
    var revenueChart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '250',
        dataFormat: 'xml',
        dataSource: data
    });
    revenueChart.render();
    /**
     * @description
     * The getXML() method returns the chart configuration and data in the XML format.
     *
     * usage: chartObj.getXML();           
     */
    function get() {
        var text = document.createTextNode(revenueChart.getXML());
        document.getElementById("msg").appendChild(text);
    }
    document.getElementById("get_xml").addEventListener("click", get);
});