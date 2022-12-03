function donativos() {
    var spreadsheet = SpreadsheetApp.getActive();
    spreadsheet.getCurrentCell().setValue('Donativos - Obra Mundial');
    spreadsheet.getCurrentCell().offset(0, 1).activate();
    spreadsheet.getCurrentCell().setValue('O');
    spreadsheet.getCurrentCell().offset(1, -1).activate();
    spreadsheet.getCurrentCell().setValue('Donativos - Despesas da Congregacao');
    spreadsheet.getCurrentCell().offset(0, 1).activate();
    spreadsheet.getCurrentCell().setValue('C');
    spreadsheet.getCurrentCell().offset(1, -1).activate();
    spreadsheet.getCurrentCell().setValue('Donativos - Reforma da Filial');
    spreadsheet.getCurrentCell().offset(0, 1).activate();
    spreadsheet.getCurrentCell().setValue('RF');
};