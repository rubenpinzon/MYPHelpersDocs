function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Colour ib!', 'showColourItbar')
      .addItem('Design Concetps', 'showDesignbar')
      .addItem('Design Command Terms', 'showCommandsbar')
      .addItem('Design Assessment Criteria', 'showCriteriabar')
      .addItem('Design Department ATLs', 'showATLbar')
      .addItem('Global Contexts', 'showContextbar')

      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 */
function showColourItbar() {
  var ui = HtmlService.createHtmlOutputFromFile('colourIt')
      .setTitle('Colour Key and Related concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsbar() {
  var ui = HtmlService.createHtmlOutputFromFile('commands')
      .setTitle('Design Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showDesignbar() {
  var ui = HtmlService.createHtmlOutputFromFile('designGuide')
      .setTitle('MYP Design Guide');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriabar() {
  var ui = HtmlService.createHtmlOutputFromFile('designCriteria')
      .setTitle('MYP Design assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showATLbar() {
  var ui = HtmlService.createHtmlOutputFromFile('designATL')
      .setTitle('MYP Design department ATLs');
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
