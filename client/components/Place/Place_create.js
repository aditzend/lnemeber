
Template.Place_create.onCreated( function() {
  console.log("Place_create tpl created");
  Places.attachSchema(Schema.Place, {replace:true});
  console.log("Schema.Place attached");

  this.autorun( () => {
    this.subscribe('Places.all');
  });

});


Template.Place_create.events({

});

var hooksObject = {
  before: {
    insert : function(doc) {
      doc.relatedActode = FlowRouter.getParam('_id');
      console.log('before hook');
      this.result(doc);
    }
  },
  after: {
    insert : function(error, result) {
      console.log('after hook ' + result);
      Session.set('creating',false);
    }
  }
}


AutoForm.hooks({
  insertPlaceForm: hooksObject
});
