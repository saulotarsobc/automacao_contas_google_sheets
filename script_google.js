let wbook = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1yo6r6VeXGQ7ZKQYdNFJcsVCn8JJcX1DAKp_GjxlfsY0/edit?usp=sharing");

let sheet = wbook.getSheetByName('dados');

function doGet() {
  let dados = getDados();
  let string_data = JSON.stringify(dados);
  return ContentService.createTextOutput(string_data).setMimeType(ContentService.MimeType.JSON);
}

function getDados() {
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
}