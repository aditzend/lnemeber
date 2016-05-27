Template.registerHelper("inputAttributes", function() {
  return {
    'id': 'search-input',
    'placeholder': "'Maria','29984695','Lopez'",
    'class': 'form-control',
    'autocomplete': 'off'
  }
});


Template.registerHelper("actodes", function() {
  return Actodes.find({}, {
    sort: {
      name: 1
    }
  });
});

Template.registerHelper("index", function() {
  return ActodesIndex;
});

Template.registerHelper("currentUser", function() {
  return Accounts.userId();
});
Template.registerHelper("resultsCount", function() {
  return ActodesIndex.getComponentDict().get('count');
});
Template.registerHelper("oneFound", function() {
  if (ActodesIndex.getComponentDict().get('count') == 1) {
    return true;
  }
});

Template.registerHelper("searchingInHeader", function() {
  return Session.get('searchingInHeader');

});
