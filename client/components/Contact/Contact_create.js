Template.Contact_create.onCreated( function() {
  Actodes.attachSchema(Schema.Contact, {replace:true});
  Relationships.attachSchema(Schema.RelCompanyContact, {replace:true});
  console.log('Schema.Contact attached');
  console.log('Schema.RelCompanyContact attached');


});

var hooksObject = {
  after: {
    insert: function(error,result) {
      Session.set('creating',false);
      console.log('actode inserted _id: ' + result);
      Relationships.insert({
        origin:result,
        destiny:FlowRouter.getParam('_id'),
        owner:Meteor.userId(),
        type:'IS_CONTACT_OF'
      });
      console.log('rel created');

    }
  }
};


AutoForm.hooks({
  insertContactForm: hooksObject
});
