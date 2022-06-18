function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('Index');
  htmlOutput.message = '';
  return htmlOutput.evaluate(); }


function doPost(e) {
  
  Logger.log(JSON.stringify(e));
  var destination_id = '1DFxKnMQrmJjk48Uu1n2Bvv2WNIA7yMtt';  
  var destination = DriveApp.getFolderById(destination_id);
  var data = Utilities.base64Decode(e.parameter.fileData);
  var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  destination.createFile(blob);listRecord(e.parameter.applicants_name,e.parameter.fathers_name,e.parameter.mothers_name,e.parameter.gender,e.parameter.dateofbirth,e.parameter.religion, e.parameter.mobile_no, e.parameter.address,e.parameter.district,e.parameter.course, e.parameter.fileName); 
  
  var htmlOutput =  HtmlService.createTemplateFromFile('Index');
  htmlOutput.message = 'Uploaded';
  return htmlOutput.evaluate(); }
  

function listRecord(applicants_name,fathers_name,mothers_name,gender,dateofbirth,religion,mobile_no,address,district,course,filename) {

  var url = 'https://docs.google.com/spreadsheets/d/1KNwrJ96D6egyBT5qud5JQaZwsD6tc44LOL0FDDf2y4U/edit#gid=0';  
  var ss= SpreadsheetApp.openByUrl(url);
  var recordsSheet = ss.getSheetByName("Data");
  recordsSheet.appendRow([applicants_name,fathers_name,mothers_name,gender,dateofbirth,religion,mobile_no,address,district,course,filename, new Date()]); }


function getUrl() {
 var url = ScriptApp.getService().getUrl();
 return url; }

