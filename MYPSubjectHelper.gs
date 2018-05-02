function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Colour ib!', 'showColourItbar')
      .addSeparator()
      .addItem('ATLs', 'showATLbar')
      .addItem('Global Contexts', 'showContextbar')
      .addSeparator()
      .addSubMenu(ui.createMenu('Arts')
                .addItem('Concepts', 'showConceptsArts')
                .addItem('Commands', 'showCommandsArts')
                .addItem('Criteria', 'showCriteriaArts'))
      .addSubMenu(ui.createMenu('Design')
                      .addItem('Concepts', 'showConceptsDesign')
                      .addItem('Commands', 'showCommandsDesign')
                      .addItem('Criteria', 'showCriteriaDesign'))
      .addSubMenu(ui.createMenu('Individuals')
                      .addItem('Concepts', 'showConceptsIndividuals')
                      .addItem('Commands', 'showCommandsIndividuals')
                      .addItem('Criteria', 'showCriteriaIndividuals'))
      .addSubMenu(ui.createMenu('Language')
                            .addItem('Concepts', 'showConceptsLanguage')
                            .addItem('Commands', 'showCommandsLanguage')
                            .addItem('Criteria', 'showCriteriaLanguage'))
      .addSubMenu(ui.createMenu('Literature')
                            .addItem('Concepts', 'showConceptsLiterature')
                            .addItem('Commands', 'showCommandsLiterature')
                            .addItem('Criteria', 'showCriteriaLiterature'))
      .addSubMenu(ui.createMenu('Mathematics')
                            .addItem('Concepts', 'showConceptsMathematics')
                            .addItem('Commands', 'showCommandsMathematics')
                            .addItem('Criteria', 'showCriteriaMathematics'))
      .addSubMenu(ui.createMenu('Physical')
                            .addItem('Concepts', 'showConceptsPhysical')
                            .addItem('Commands', 'showCommandsPhysical')
                            .addItem('Criteria', 'showCriteriaPhysical'))
      .addSubMenu(ui.createMenu('Sciences')
                            .addItem('Concepts', 'showConceptsSciences')
                            .addItem('Commands', 'showCommandsSciences')
                            .addItem('Criteria', 'showCriteriaSciences'))
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

function showCommandsArts() {
  var ui = HtmlService.createHtmlOutputFromFile('commands_arts')
      .setTitle('Arts Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsArts() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts_arts')
      .setTitle('Arts Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriaArts() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria_arts')
      .setTitle('Arts assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsDesign() {
  var ui = HtmlService.createHtmlOutputFromFile('commands_deg')
      .setTitle('Design Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsDesign() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts_deg')
      .setTitle('Design Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriaDesign() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria_deg')
      .setTitle('Design assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsIndividuals() {
  var ui = HtmlService.createHtmlOutputFromFile('commands_ind')
      .setTitle('Individuals and societies Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsIndividuals() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts_ind')
      .setTitle('Individuals and societies Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriaIndividuals() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria_ind')
      .setTitle('Individuals and societies assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsLanguage() {
  var ui = HtmlService.createHtmlOutputFromFile('commands_laq')
      .setTitle('Language acquisition Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsLanguage() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts_laq')
      .setTitle('Language acquisition Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriaLanguage() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria_laq')
      .setTitle('Language acquisition assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsLiterature() {
  var ui = HtmlService.createHtmlOutputFromFile('commands_lit')
      .setTitle('Language and literature Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsLiterature() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts_lit')
      .setTitle('Language and literature Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriaLiterature() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria_lit')
      .setTitle('Language and literature assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsMathematics() {
  var ui = HtmlService.createHtmlOutputFromFile('commands_math')
      .setTitle('Mathematics Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsMathematics() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts_math')
      .setTitle('Mathematics Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriaMathematics() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria_math')
      .setTitle('Mathematics assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsPhysical() {
  var ui = HtmlService.createHtmlOutputFromFile('commands_phy')
      .setTitle('Physical and health education Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsMathematics() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts_phy')
      .setTitle('Physical and health education Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriaMathematics() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria_phy')
      .setTitle('Physical and health education assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}

function showCommandsSciences() {
  var ui = HtmlService.createHtmlOutputFromFile('commands_sci')
      .setTitle('Sciences Command Terms');
  DocumentApp.getUi().showSidebar(ui);
}

function showConceptsSciences() {
  var ui = HtmlService.createHtmlOutputFromFile('concepts_sci')
      .setTitle('Sciences Key and Related Concepts');
  DocumentApp.getUi().showSidebar(ui);
}

function showCriteriaSciences() {
  var ui = HtmlService.createHtmlOutputFromFile('criteria_sci')
      .setTitle('Sciences assessment criteria');
  DocumentApp.getUi().showSidebar(ui);
}