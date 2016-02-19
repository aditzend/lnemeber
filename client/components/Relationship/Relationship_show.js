Template.Relationship_show.onCreated( function() {
  this.autorun( () => {
    this.subscribe(
      'Relationships.byDestiny',
      Meteor.userId(),
      FlowRouter.getParam('_id')
    );
  }
 );
});
Template.Relationship_show.helpers({
  rel : function() {
    return Relationships.findOne({
      origin:Meteor.userId(),
      destiny:FlowRouter.getParam('_id')});
  },
  showSaveBtn : function() {
    return Session.get('showSaveBtn');
  }
});
Template.Relationship_show.events({
  "click #input-phantom": function(){
    //console.log(event.target.id);
    if ( Session.get('showSaveBtn') ) {
      $('#input-phantom').blur();

      Session.set('showSaveBtn',false);
    }else{
      $('#input-phantom').select();

      Session.set('showSaveBtn',true)
    }

  },
  "click #btn-save": function() {

    var txt = $('#input-phantom').val();
    Relationships.attachSchema(Schema.RelationshipWithCustomer,{replace:true});
    Relationships.update(this._id,{$set:{notes:txt}});
    console.log('updated OK');
    //Session.set('relUpdated',true);
    //Session.set('wellClicked',false);
    $('#input-phantom').prop('selected',false);
    Session.set('showSaveBtn',false);

  }
});
