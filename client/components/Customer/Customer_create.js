Template.Customer_create.onCreated(function() {
  Actodes.attachSchema(Schema.Company, {replace:true});
  console.log("Schema.Company attached");
});

var hooksObject = {
  after: {
    insert: function(error, result) {
      var newCompanyURL = '/show-customer/' + result;
      console.log('INSERTED OK : ' + result);
      //Session.set('CURR_COMPANY_ID', result);
      //Session.set('STEP_COMPLETED', 'COMPANY_CREATED');
      //Session.set('SHOW_COMPLETED_TPL', 'displayCompany');
      FlowRouter.go('showCustomer', {_id: result});
    }
  }
}


AutoForm.hooks({
  insertCompany: hooksObject
});
