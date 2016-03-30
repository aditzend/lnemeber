/*Template.Rel_create.onCreated( function() {
  Rels.attachSchema(
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
      doc.type = FlowRouter.getQueryParam('relType');
      console.log('before hook');
      this.result(doc);
    }
  },
  after: {
    insert : function(error, result) {
      console.log('Relationship with id:  ' + result);
      Session.set('creating',false);
    }
  }
}


AutoForm.hooks({
  insertRelationshipForm: hooksObject
});
*/

Template.Rel_create.onRendered(function() {
  $('[data-action=form]').validate({
    rules: {
      paymentDays: {
        required: false,
      }
    },


    submitHandler: () => {
      var notes = $('#notesInput').val();
      var paymentDays = $('#paymentDaysInput').val();
      var paymentTerms = $('#paymentTermsInput').val();
      var paymentNotes = $('#paymentNotesInput').val();
      var origin = Meteor.userId();
      var destiny = FlowRouter.getParam('_id');
      var insert = Rels.insert({
        destiny: destiny,
        origin: origin, //belongsTo
        type: FlowRouter.getQueryParam('relType'),
        notes: notes,
        paymentDays: paymentDays,
        paymentTerms: paymentTerms,
        paymentNotes: paymentNotes
      });
      console.log("Rel id : " + insert);
      console.log("Rel origin : " + origin);
      console.log("Rel destiny: " + destiny);
      Session.set('creating', false);

    }
  });
});

Template.Rel_create.events({
  'submit [data-action=form]': (e) => {
    e.preventDefault();
    console.log("submitted ok");

  }
});
