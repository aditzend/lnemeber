Template.Contact_show.onCreated( function() {
  //const origin = Meteor.userId();
  const destiny = FlowRouter.getParam('_id');
  const owner = Meteor.userId();
  this.autorun( () => {
    this.subscribe('Contacts.byDestiny', destiny, owner);
    this.subscribe('Actodes.all');
  }
 );
});
Template.Contact_show.helpers({
  rel: function() {
    return Relationships.find({
      destiny:FlowRouter.getParam('_id')});
  },
  contact: function(_id) {
   return Actodes.findOne({_id: _id});
  //return _id;
  }

});
