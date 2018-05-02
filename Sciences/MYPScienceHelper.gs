function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Colour ib!', 'showColourItbar')
      .addItem('Sciences Concepts', 'showConceptsbar')
      .addItem('Sciences Command Terms', 'showCommandsbar')
      .addItem('Sciences Assessment Criteria', 'showCriteriabar')
      .addItem('ATLs', 'showATLbar')
      .addItem('Global Contexts', 'showContextbar')

      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function showColourItbar() {
  var ui = HtmlService.createHtmlOutputFromFile('colourIt')
      .setTitle('Colour Key and Related concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsbar() {
  var ui = HtmlService.createHtmlOutputFromFile('commands')
      .setTitle('Sciences Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsbar() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts')
      .setTitle('Sciences Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriabar() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria')
      .setTitle('Sciences assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showATLbar() {
  var ui = HtmlService.createHtmlOutputFromFile('ATLs')
      .setTitle('MYP ATLs');
  DocumentApp.getUi().showSidebar(ui);
}

function showContextbar() {
  var ui = HtmlService.createHtmlOutputFromFile('globalContext')
      .setTitle('Global Contexts and explorations');
  DocumentApp.getUi().showSidebar(ui);
}
function ColourIt(findMe, col) {
    var body = DocumentApp.getActiveDocument().getBody();
    var foundElement = body.findText(findMe);
    while (foundElement != null) {          
      // Get the text object from the element
      var foundText = foundElement.getElement().asText();
      
      // Where in the Element is the found text?
      var start = foundElement.getStartOffset();
      var end = foundElement.getEndOffsetInclusive();
      
      // Change the background color to red
      foundText.setForegroundColor(start, end, col);
      foundText.setBold(start, end, true);
      
      // Find the next match
      foundElement = body.findText(findMe, foundElement);
      
    }
    
}
