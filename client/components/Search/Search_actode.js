Template.Search_actode.helpers({

  // taken from easysearch
  inputAttributes: function() {
    return{ 'id':'search-input','class': 'form-control', 'placeholder': "'Maria','29984695','Lopez' " };
  },
  actodes : function () {
    return Actodes.find({}, { sort: { name: 1} });
  },
  index: function () {
    return ActodesIndex;
  },
  currentUser: function () {
    return Accounts.userId();
  },
  resultsCount: function () {
    return ActodesIndex.getComponentDict().get('count');
  },
  oneFound: function () {
    if (ActodesIndex.getComponentDict().get('count') == 1) {
      return true;
    }
  },
  renderTmpl: () => Template.renderTemplate
});
