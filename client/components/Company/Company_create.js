Template.Company_create.onCreated(function() {
  Actodes.attachSchema(Schema.Company, {replace:true});
  console.log("Schema.Company attached");
});

var hooksObject = {
  after: {
    insert: function(error, result) {
      console.log('INSERTED OK : ' + result);
      const relType = FlowRouter.getQueryParam('relType');
      FlowRouter.go('showCompany', {_id: result},{relType: relType });
    }
  }
}


AutoForm.hooks({
  insertCompany: hooksObject
});
