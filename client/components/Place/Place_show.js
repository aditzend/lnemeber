Template.Place_show.onCreated( function() {

  this.autorun( () => {
    this.subscribe('Places.byRelatedActode', FlowRouter.getParam('_id'));
  });

});

/*Template.Place_show.onRendered( function() {
  Places.attachSchema(Schema.Place, {replace:true});
  console.log('Schema.Place attached');
});*/

Template.Place_show.helpers({
  places: function() {
    var result = Places.find({relatedActode:FlowRouter.getParam('_id')},{sort: {placeType: 1}});
    return (result.count() == 0) ? false : result;
  },
  placeId: function() {
    return this._id;
  }
});


Template.Place_show.events({
  "click [data-action=phone]" : function() {
    Session.set('btn',true);
    setTimeout(function(){
    Session.set('btn',false);
    }, 100);
  },
  'click [data-action=edit]' : function(e) {
//
if (Session.get('btn')) {
  console.log('btn tocado, no hago nada');
}else{
  console.log('editing');
  Session.set('editing',this._id);
}
//

  },
  'click [data-action=delete-item]' : function() {
    Session.set('btn',true);
    console.log('btn CLICK');
    setTimeout(function(){
    Session.set('btn',false);
    console.log('btn UNCLICK');
  }, 100);
  console.log('delete item...' + this._id);
  Places.remove(this._id);
  Session.set('deleting',false);
  }

});
