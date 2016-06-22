import './rel-customer-edit.html';
import '/imports/api/rels/methods.js';


Template.Rel_customer_edit.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    editing: false

  });
});



Template.Rel_customer_edit.events({
  'submit [data-action=save-edit]': function(e) {
    e.preventDefault();
    console.log('editing Rel: ' + this._id);
    Rels.update(this._id, {
      $set: {
        notes: e.target.notes.value,
        paymentDays: e.target.paymentDays.value,
        paymentTerms: e.target.paymentTerms.value,
        paymentNotes: e.target.paymentNotes.value,
      }
    });
  },
  'click .js-rel-customer-edit-cancel': function(e, instance) {
    instance.data.onCancel();
    swal({
      title: "Cancelado",
      text: "NO SE GUARDO LA RELACION CON ESTE CLIENTE",
      type: "warning"
    });
  }
});
