
$(function () {

    var ticker = $.connection.stockTickerMini,  //the generated client-side hub proxy
        up = '▲',
        down = '▼',
        $stockTable = $('#stockTable'),
        $stockTableBody = $stockTable.find('tbody'),
        rowTemplate = '<tr data-symbol="{Symbol}"><td>{Symbol}</td><td>{Price}</td><td>{DayOpen}</td><td>{Direction} {Change}</td><td>{PercentChange}</td></tr>';


    //Add a client-side hub method that the server will call
    //ticker.client.updateStockPrice = function (stock) {
    //    var displayStock = formatStock(stock),
    //        $row = $(rowTemplate.supplant(displayStock));

    //    $stockTableBody.find('tr[data-symbol=' + stock.Symbol + ']')
    //        .replaceWith($row);
    //}

    ticker.client.updateStockPrice = function (stock, num) {

        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell = row.insertCell(0);

        cell.innerHTML = stock.Price;

        console.log(stock.Price);
    }

    //Start the connection
    $.connection.hub.start().done();

});