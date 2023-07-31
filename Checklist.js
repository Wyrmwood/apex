function hideSheetsExcept(sheetName) {
  var sheets=SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for(var i =0; i<sheets.length; i++){
    if(sheets[i].getName() != sheetName) {
      sheets[i].hideSheet();
    }
  }
}

function showSheetsExcept(sheetName) {
  var sheets=SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for(var i =0; i<sheets.length; i++){
    if(sheets[i].getName() != sheetName) {
      sheets[i].showSheet();
    }
  }
}

function sendMessage(sheetName) {
  var message = {
        to: "kisti@apexleadershipco.com,katiem@apexleadershipco.com",
        subject: sheetName,
        body: "Hey team,\n\nHere is my " + sheetName + " attached below...",
        attachments: [SpreadsheetApp.getActiveSpreadsheet().getAs(MimeType.PDF).setName(sheetName)]
    }
    MailApp.sendEmail(message);
}

function sendChecklist(sheetName) {
  ui = SpreadsheetApp.getUi()
  var response = ui.alert("Are you sure you want to send " + sheetName + "?", ui.ButtonSet.YES_NO);
  if (response == ui.Button.YES) {
    hideSheetsExcept(sheetName)
    sendMessage(sheetName)
    showSheetsExcept(sheetName)
    SpreadsheetApp.getUi().alert("Successfully submitted " + sheetName);
  }
}

function sendChecklistDynamic() {
  var sheetName = SpreadsheetApp.getActiveSheet().getName()
  sendChecklist(sheetName)
}
