function myFunction() {
  var spreadsheet = SpreadsheetApp.getActive();
  var dia = spreadsheet.getCurrentCell().getValue();
  spreadsheet.getCurrentCell().setValue(dia);
  spreadsheet.getCurrentCell().offset(0, 1).activate();
  spreadsheet.getCurrentCell().setValue('Donativos - Obra Mundial');
  spreadsheet.getCurrentCell().offset(0, 1).activate();
  spreadsheet.getCurrentCell().setValue('O');
  spreadsheet.getCurrentCell().offset(1, -2).activate();
  spreadsheet.getCurrentCell().setValue(dia);
  spreadsheet.getCurrentCell().offset(0, 1).activate();
  spreadsheet.getCurrentCell().setValue('Donativos - Despesas da Congregação');
  spreadsheet.getCurrentCell().offset(0, 1).activate();
  spreadsheet.getCurrentCell().setValue('C');
  spreadsheet.getCurrentCell().offset(1, -2).activate();
  spreadsheet.getCurrentCell().setValue(dia);
  spreadsheet.getCurrentCell().offset(0, 1).activate();
  spreadsheet.getCurrentCell().setValue('Donativos - Construção da Filial');
  spreadsheet.getCurrentCell().offset(0, 1).activate();
  spreadsheet.getCurrentCell().setValue('RF');
  spreadsheet.getCurrentCell().offset(-2, 1).activate();
};

function NOVALINHA() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(spreadsheet.getCurrentCell().getRow(), 1, 1, sheet.getMaxColumns()).activate();
  spreadsheet.getActiveSheet().insertRowsAfter(spreadsheet.getActiveRange().getLastRow(), 1);
  spreadsheet.getActiveRange().offset(spreadsheet.getActiveRange().getNumRows(), 0, 1, spreadsheet.getActiveRange().getNumColumns()).activate();
  spreadsheet.getCurrentCell().activate();
};

function BACEN() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getCurrentCell().setValue('Reajuste Monetário - BACEN');
  spreadsheet.getCurrentCell().offset(0, 1).activate();
  spreadsheet.getCurrentCell().setValue('RM');
  spreadsheet.getCurrentCell().offset(0, 3).activate();
};

function JUROS() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getCurrentCell().setValue('Juros Bancários');
  spreadsheet.getCurrentCell().offset(0, 1).activate();
  spreadsheet.getCurrentCell().setValue('J');
  spreadsheet.getCurrentCell().offset(0, 3).activate();
};