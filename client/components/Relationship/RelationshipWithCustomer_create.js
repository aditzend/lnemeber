//RelationshipWithCustomer_create.js
Template.RelationshipWithCustomer_create.onCreated( function() {
  Relationships.attachSchema(
    Schema.RelationshipWithCustomer,
     {replace:true}
   );
});
var hooksObject = {
  before: {
    insert : function(doc) {
      doc.destiny = FlowRouter.getParam('_id');// or GlobalId
      doc.origin = Meteor.userId();//belongsTo
      doc.owner = Meteor.userId();//belongsTo
      console.log('before hook');
      this.result(doc);
    }
  },
  after: {
    insert : function(error, result) {
      console.log('Relationship with customer id:  ' + result);
      Session.set('creating',false);
    }
  }
}


AutoForm.hooks({
  insertRelationshipForm: hooksObject
});
