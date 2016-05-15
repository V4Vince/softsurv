// Helper Functions for Displaying Elements on the Page

'use strict';

// Renders User Auth Forms

// Renders New Survey Form
const renderNewSurveyForm = function() {
  console.log('render new survey form');
  let newSurveyForm = require('./templates/new-survey-form.handlebars');
  $('.survey-form-holder').append(newSurveyForm);
};

// Renders All User's Surveys
const showAllUserSurveys = function(surveys) {
  console.log('show all user surveys');
  let showUserSurveys = require('./templates/show-user-surveys.handlebars');
  $('.show-all-user-surveys').append(showUserSurveys({
    surveys : surveys
  }));
};

module.exports = {
  renderNewSurveyForm,
  showAllUserSurveys
};
