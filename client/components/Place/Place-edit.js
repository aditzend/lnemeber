Template.Place_edit.events({
  'submit [data-action=save-edit]' : function(e) {
    e.preventDefault();
    console.log('editing Place: ' + this._id );
    Places.update(this._id, {
      $set:{
        placeType: e.target.type.value,
        address: e.target.address.value,
        text: e.target.text.value,
        phone: e.target.phone.value
      }
    });
    Session.set('editing',false);
  }
});
