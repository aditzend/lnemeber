import './company-search.html';

Template.Company_search.onCreated(function() {
  this.subscribe('companies.public');

});
Template.Company_search.helpers({
  company_searchIndexAttributes: function() {
    return {
      'id': 'search-input',
      'class': 'form-control',
      'autocomplete': 'off',
      'placeholder': "Buscar empresa... ",
      'style': "text-transform:uppercase"
    };
  },
  company_searchIndex: function() {
    return CompaniesIndex;
  },
  insertedText: function() {
    let dict = CompaniesIndex.getComponentDict();
    return dict.get('searchDefinition').toUpperCase();
  }
});

Template.Company_search.events({
  'click .js-search-result-item': function(e, instance) {
    //console.log("id elegido ", );
    instance.data.selectedCompany(e.target.id);

  },
  'click .js-create-company': function(e, instance) {
    let dict = CompaniesIndex.getComponentDict();
    let insertedText = dict.get('searchDefinition').toUpperCase();
    instance.data.companyNotFound(insertedText);
  }
})
