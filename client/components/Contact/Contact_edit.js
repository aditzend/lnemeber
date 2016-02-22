
Template.Contact_edit.events({
  'submit [data-action=save-edit]' : function(e) {
    e.preventDefault();
    console.log('editing Actode: ' + this._id );
    Actodes.update(this._id, {
      $set:{
        isMale: e.target.isMale.checked,
        name: e.target.name.value,
        middleName: e.target.middleName.value,
        lastName: e.target.lastName.value,
        treatedAs: e.target.treatedAs.value,
        formalTreatment: e.target.formalTreatment.checked,
        email: e.target.email.value,
        mobile: e.target.mobile.value,
      }
    });
    Session.set('editing',false);
  }
});
Template.Contact_edit.helpers({
  checkIfFormal : function() {
    return (this.formalTreatment) ? 'checked' : '';
  },
  checkIfMale : function() {
    return (this.isMale) ? 'checked' : '';
  }

});
